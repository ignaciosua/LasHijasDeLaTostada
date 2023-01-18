<template v-slot:extension>
  <v-container>
    <v-tabs
      align-with-title
    >
      <v-tabs-slider color="blue"></v-tabs-slider>

      <v-tab @click="details=true; jobChange=false; vacations=false">Employee details</v-tab>
      <v-tab @click="details=false; jobChange=false; vacations=true">Vacations</v-tab>
      <v-tab @click="details=false; jobChange=true; vacations=false">Position change</v-tab>
    </v-tabs>
    <div>
      <DetailsView v-if="details" />
      <JobChangeView v-if="jobChange" />
      <VacationsView v-if="vacations" />
    </div>
  </v-container>
</template>

<script>
import DetailsView from './DetailsView';
import JobChangeView from './JobChangeView';
import VacationsView from './VacationsView';
 
export default {
  data() {
    return {
      details: true,
      jobChange: false,
      vacations: false
    }
  },
  methods: {},
  components: {
    DetailsView,
    JobChangeView,
    VacationsView
  }
}
</script>