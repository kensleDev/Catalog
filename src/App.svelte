<script lang="ts">
  import { Router, Route } from "svelte-routing";

  import TrophyPage from "./lib/trophy-site/pages/LandingPage.svelte";
  import TrophyAboutPage from "./lib/trophy-site/pages/AboutPage.svelte";

  import LandscapingPage from "./lib/landscaping-site/pages/LandingPage.svelte";
  import LandscapingAboutPage from "./lib/landscaping-site/pages/AboutPage.svelte";

  import ShopLandingPage from "./lib/shop-site/pages/LandingPage.svelte";
  import ShopProductPage from "./lib/shop-site/pages/ProductPage.svelte";
  import ShopFaqPage from "./lib/shop-site/pages/FaqPage.svelte";
  import ShopAboutPage from "./lib/shop-site/pages/AboutPage.svelte";
  import ShopCartPage from "./lib/shop-site/pages/CartPage.svelte";
</script>

<Router>
  <Route component={LandscapingPage} />

  <Route path="/trophy/" component={TrophyPage} />
  <Route path="/trophy/about" component={TrophyAboutPage} />

  <Route path="/landscaping/" component={LandscapingPage} />
  <Route path="/landscaping/about" component={LandscapingAboutPage} />

  <Route path="/shop/" component={ShopLandingPage} />
  <Route path="/shop/faq" component={ShopFaqPage} />
  <Route path="/shop/about" component={ShopAboutPage} />
  <Route path="/shop/cart" component={ShopCartPage} />
  <Route path="/shop/product/:id" let:params>
    <ShopProductPage id={params.id} />
  </Route>

  <!-- <Route path="/product/:id" let:params>
        <Details id={params.id} />
    </Route> -->
</Router>
