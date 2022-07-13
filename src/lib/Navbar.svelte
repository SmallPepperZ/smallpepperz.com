<script>
    let pages = [
        {
            title: "Projects",
            url: "/projects",
        },
    ]
    let social = [
        {
            url: "https://github.com/SmallPepperZ",
            icon: "fa-brands fa-github"
        },
        {
            url: "mailto:mail@smallpepperz.com",
            icon: "fa-solid fa-envelope"
        }
    ]
</script>
<nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="/">smallpepperz.com</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                {#each pages as item}
                <li class="nav-item">
                    <a class="nav-link" href="{item.url}">{item.title}</a>
                </li>
                {/each}
            </ul>
            <ul class="navbar-nav me-2">
                {#each social as item}
                <li class="nav-item">
                    <a class="nav-link" href="{item.url}"><i class="{item.icon}" style="font-size:25px;"></i></a>
                </li>
                {/each}
            </ul>
        </div>
    </div>
</nav>