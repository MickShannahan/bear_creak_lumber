<script setup>
import { logger } from '@/utils/Logger.js';
import { Offcanvas } from 'bootstrap/dist/js/bootstrap.bundle.js';
import { onMounted, useTemplateRef, ref } from 'vue';

defineExpose({close})
const props = defineProps({
  id: {type: String, default: 'offcanvas-id'},
  position: {type: String, default: 'end'},
  resizable: {type: Boolean, default: true}
})
const emit = defineEmits(['show','shown', 'hidden'])


const offcanvas = useTemplateRef(`${props.id}-offcanvas-id`)
const offcanvasTrigger = useTemplateRef(`${props.id}-offcanvas-trigger-wrapper`)

const offcanvasWidth = ref(35)

let resizing = false
const startResize = (event) => {
  if(resizing || !props.resizable) {return}
  resizing = true
  setTimeout(()=> resizing = false, 250)

  const startX = event.clientX
  const initialWidth = offcanvasWidth.value

  const onMouseMove = (moveEvent) => {
    const deltaX = startX - moveEvent.clientX // Reverse the direction
    const newWidth = initialWidth + (deltaX / window.innerWidth) * 100 // Convert px to vw
    offcanvasWidth.value = Math.max(20, Math.min(newWidth, 90))
  };

  const onMouseUp = () => {
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  };

  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', onMouseUp);
};

onMounted(() => {
  const triggerBtn = offcanvasTrigger.value?.querySelector('button, [role=button]')
  if(triggerBtn){
    triggerBtn.setAttribute('data-bs-target', `#${props.id}`)
    triggerBtn.setAttribute('data-bs-toggle', 'offcanvas')
  }
  offcanvas.value?.addEventListener('show.bs.offcanvas', emit('show'))
  offcanvas.value?.addEventListener('hidden.bs.offcanvas', emit('hidden'))
  offcanvas.value?.addEventListener('shown.bs.offcanvas', emit('shown'))
})

function close(){
  let toClose = Offcanvas.getOrCreateInstance(offcanvas.value)
  if(toClose) toClose.hide()
}
</script>

<template>
  <!-- trigger / button -->
   <span :ref="`${id}-offcanvas-trigger-wrapper`">
     <slot name="trigger">
       <button class="btn btn-info" :data-bs-target="'#'+id" data-bs-toggle="offcanvas">
         Open Offcanvas
        </button>
      </slot>
    </span>
  <Teleport to="body">
    <section :ref="id + '-offcanvas-ref'" :id class="offcanvas d-flex flex-row" :class="`offcanvas-${position}`" :style="{ '--bs-offcanvas-width': offcanvasWidth + 'vw' }">
      <div class="offcanvas-resizer" @mousedown="startResize"></div>
      <div class="d-flex flex-column">
        <div class="offcanvas-header">
          <!-- header -->
          <slot name="header">
            <div class="row"><button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button></div>
          </slot>
        </div>
        <div class="offcanvas-body">
          <!-- body -->
          <slot name="body">
            
          </slot>
        </div>
      </div>
    </section>
  </Teleport>
</template>

<style lang="scss" scoped>
.offcanvas {
  width: var(--bs-offcanvas-width);
  transition: all 0.2s ease;
  transition-delay:0;
  user-select: none;
}

.offcanvas-resizer {
  --resize-width: 12px;
  position: relative;
  left: calc(var(--resize-width) / -2);
  height: 100%;
  width: 10px;
  border-left: calc(var(--resize-width) / 3) solid;
  border-color: transparent;
  &:hover {
    cursor: ew-resize;
    border-color: var(--bs-primary);
  }
}
</style>