import pageContent from '@/components/layout/page-content/page-content.vue';
import pageFooter from '@/components/layout/page-footer/page-footer.vue';
import pageHeader from '@/components/layout/page-header/page-header.vue';
import pageSidebar from '@/components/layout/page-sidebar/page-sidebar.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'home-page',
  components: {
    pageHeader,
    pageSidebar,
    pageContent,
    pageFooter,
  }
});