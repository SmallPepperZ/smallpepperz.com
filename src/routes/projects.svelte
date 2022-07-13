<script lang="ts">
    import Project from '../lib/Project.svelte'
    import { projects } from '../consts'
</script>

<div class="container">
    <div class="row pt-3">
        <h2>Projects</h2>
        
        <ul class="nav nav-pills mb-3 justify-content-center" id="projectTabs" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="active-tab" data-bs-toggle="tab" data-bs-target="#active-tab-pane" type="button" role="tab" aria-controls="active-tab-pane" aria-selected="true">
                    Active
                    <span class="badge text-bg-secondary">{projects.active.length}</span>
                </button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="archived-tab" data-bs-toggle="tab" data-bs-target="#archived-tab-pane" type="button" role="tab" aria-controls="archived-tab-pane" aria-selected="false">
                    Archived
                    <span class="badge text-bg-secondary">{projects.archived.length}</span>
                </button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="contribution-tab" data-bs-toggle="tab" data-bs-target="#contribution-tab-pane" type="button" role="tab" aria-controls="contribution-tab-pane" aria-selected="false">
                    Contributions
                    <span class="badge text-bg-secondary">{projects.contribution.length}</span>
                </button>
            </li>
        </ul>
        <div class="tab-content" id="projects">
            <div class="tab-pane fade show active" id="active-tab-pane" role="tabpanel" aria-labelledby="active-tab">
                <div class="row">
                    {#each projects.active as project}
                    <Project {project} />
                    {/each}
                </div>
            </div>
            <div class="tab-pane fade" id="archived-tab-pane" role="tabpanel" aria-labelledby="archived-tab">
                <div class="row">
                    {#each projects.archived as project}
                    <Project {project} />
                    {/each}
                </div>
            </div>
            <div class="tab-pane fade" id="contribution-tab-pane" role="tabpanel" aria-labelledby="contribution-tab">
                <div class="row">
                    {#each projects.contribution as project}
                    <Project {project} />
                    {/each}
                </div>
            </div>
            
        </div>
    </div>
</div>