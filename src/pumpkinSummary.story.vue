<script setup>
import { pumpkinSummary } from "pumpkin-vue";

const sections = ["section1", "title1", "section2", "title2", "block1"];
</script>

<template>
  <Story title="Summary">
    <Variant title="standard">
      <main>
        <div class="left-block">
          <pumpkinSummary :headersId="sections"></pumpkinSummary>
        </div>
        <div class="summary-parent" id="summary-parent-standard">
          <div class="summary-section" id="section1">
            <h1>section d'assaut</h1>
            <div id="title1">
              <h2>casquette</h2>
              <p>
                Loworem ipsuwum dolowor sit awoomet, cowonsectetur awoodipiscing elit, sed
                dowo eiusmowod tempowor incididunt ut lawoobowore et dolowore mawoogna
                aliquawoo. Ut enim awood minim uvueniawoom, quwuis nowostrud
                exercitawootion ullamcowo lawooboworis nisi ut awooliquip ex ea commowodo
                consequawoot.
              </p>
            </div>
          </div>
          <div class="summary-section" id="section2">
            <h1>big section 1</h1>
            <div id="title2">
              <h2>beautiful</h2>
              <p>
                Loworem ipsuwum dolowor sit awoomet, cowonsectetur awoodipiscing elit, sed
                dowo eiusmowod tempowor incididunt ut lawoobowore et dolowore mawoogna
                aliquawoo. Ut enim awood minim uvueniawoom, quwuis nowostrud
                exercitawootion ullamcowo lawooboworis nisi ut awooliquip ex ea commowodo
                consequawoot.
              </p>
              <div id="block1">
                <h3>hello world</h3>
                <p>
                  Loworem ipsuwum dolowor sit awoomet, cowonsectetur awoodipiscing elit,
                  sed dowo eiusmowod tempowor incididunt ut lawoobowore et dolowore
                  mawoogna aliquawoo. Ut enim awood minim uvueniawoom, quwuis nowostrud
                  exercitawootion ullamcowo lawooboworis nisi ut awooliquip ex ea
                  commowodo consequawoot.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="right-block"></div>
      </main>
    </Variant>
		
    <!-- <Variant title="auto build">
      <main>
        <div class="left-block">
          <pumpkinSummary :headers="sections"></pumpkinSummary>
        </div>
      </main>
    </Variant> -->
  </Story>
</template>

<style scoped>
main {
  display: flex;
  flex-align: row;
}

.left-block {
  width: 100px;
}

.right-block {
  width: 100%;
}

.summary-section {
  height: 500px;
  width: 80%;
  border: 1px solid black;
}
</style>

<docs lang="md">
# Props

- threshold
  - type: **number**
  - default: 0.5
  - :x: not required
- headersId
  - type: **Array**
  - :x: not required
- autoBuild
  - type: **Boolean**
  - default: false
  - :x: not required
- autoBuildLevel
  - type: **Number**
  - default: 0
  - :x: not required
- autoBuildDOMId
  - type: **String\_**
  - :x: not required
</docs>
