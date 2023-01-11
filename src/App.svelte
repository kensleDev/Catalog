<script lang="ts">
  import TrophyPage from "./lib/trophy-site/pages/LandingPage.svelte";
  import AboutPage from "./lib/trophy-site/pages/AboutPage.svelte";

  import LandscapingPage from "./lib/landscaping-site/pages/LandingPage.svelte";
  import ShopPage from "./lib/ecommerce-site/pages/LandingPage.svelte";

  import { Router, Route } from "svelte-routing";
</script>

<Router>
  <Route component={LandscapingPage} />

  <Route path="/trophy/" component={TrophyPage} />
  <Route path="/trophy/about" component={AboutPage} />

  <Route path="/landscaping/" component={LandscapingPage} />

  <Route path="/shop/" component={ShopPage} />

  <!-- <Route path="/product/:id" let:params>
        <Details id={params.id} />
    </Route> -->
</Router>
