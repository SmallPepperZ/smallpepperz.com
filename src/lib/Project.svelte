

<script lang="ts">
    import { onMount } from "svelte";

    import { tagStyles } from "../consts";
    import type { Project, ProjectLink, ProjectTag } from "../consts";
    
    export let project:Project;
    let name:string = "Unknown";
    let description:string = "";
    let finalTags :ProjectTag[]  = []
    let finalLinks:ProjectLink[] = []



    function getTag(tagName:string):ProjectTag {
        if (tagName == undefined) {
            return {
                text: "Unknown",
                color: "#aaa"
            }
        }
        let tag = tagName.toLowerCase()
        if (tag in tagStyles) {
            return tagStyles[tag]
        } else {
            return {
                text: tag,
                color: "#aaa"
            }
        }
    }
    onMount(async () => {
		let data = await getData(project.repo)
        data = data.value
        if (data.owner.login == "SmallPepperZ") {
            name = project.name ?? data.name ?? ""
        } else {
            name = project.name ?? data.full_name ?? ""
        }
        description = project.description ?? data.description ?? ""
        if (project.tags ?? [].length > 0) {
            finalTags = [data.language].concat(project.tags).map(tag => getTag(tag))
        } else {
            finalTags = [getTag(data.language)]
        }
        
        finalLinks= [{
            url: data.html_url,
            text: "Github",
            icon: "fa-brands fa-github",
            class: "primary"
        }].concat(project.links ?? [])
	});
    async function getData(repo:string){

        var ttl = 1*(1000*60*60); // 1 hour
        let storageKey = `projects-${repo.replace('/', '-')}`;
        var cacheddata = localStorage.getItem(storageKey); 
    
        if (cacheddata){
            return JSON.parse(cacheddata);
        } else {
        //otherwise fetch data from api then save the data in localstorage 
            const res = await fetch(`https://api.github.com/repos/${repo}`)
            var data = await res.json();
            var json = {
                value: data, 
                expiry: Date.now() + ttl}
            localStorage.setItem(storageKey, JSON.stringify(json));
            return data;
        }
    }
   
</script>

<div class="col-6">
    <div class="card project">
        <div class="card-body">
            <h3 class="card-title">{name}</h3>
            <p class="card-text">{@html description}</p>
            {#each finalLinks as link}
            <a href="{link.url}"target="_blank" rel="noopener noreferrer" class="mt-auto btn btn-{link.class}"><i class="{link.icon}"></i> {link.text}</a>{' '}
            {/each}
        </div>
        <div class="card-footer">
            {#each finalTags as tag}
            <span class="badge badge-secondary" style="background-color:{tag.color};font-size:15px;">{tag.text}</span>{' '}
            {/each}
        </div>
    </div>
</div>

<style>
    .card {
        height: 100%;
    }
</style>