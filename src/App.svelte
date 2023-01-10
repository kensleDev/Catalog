<script lang="ts">

  import LandingPage from './lib/trophy-site/pages/LandingPage.svelte'
  import AboutPage from './lib/trophy-site/pages/AboutPage.svelte'

  import { Router, Route } from 'svelte-routing'
</script>

<Router>
    <Route component={LandingPage} />
    <Route path="/trophy/" component={LandingPage} />
    <Route path="/trophy/about" component={AboutPage} />

    <!-- <Route path="/product/:id" let:params>
        <Details id={params.id} />
    </Route> -->
</Router>

