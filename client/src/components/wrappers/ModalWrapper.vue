<script setup>
import { Modal } from 'bootstrap/dist/js/bootstrap.bundle.js';
import { onMounted, useTemplateRef } from 'vue';


defineExpose({ close })
const props = defineProps({
  id: {type: String, default: 'modal-id'},
  size: {type: String, default: 'lg'},
  position: {type: String, default: 'center'},
  isStatic: {type: Boolean, default: false}
})


const emit = defineEmits(['show','shown', 'hidden'])

const modal = useTemplateRef(`${props.id}-modal-id`)
const modalTrigger = useTemplateRef(`${props.id}-modal-trigger-wrapper`)

onMounted(() => {
  const triggerBtn = modalTrigger.value?.querySelector('button, [role=button]')
  if(triggerBtn){
    triggerBtn.setAttribute('data-bs-target', `#${props.id}`)
    triggerBtn.setAttribute('data-bs-toggle', 'modal')
  }
  modal.value?.addEventListener('show.bs.modal', emit('show'))
  modal.value?.addEventListener('hidden.bs.modal', emit('hidden'))
  modal.value?.addEventListener('shown.bs.modal', emit('shown'))
});

function close(){
  let toClose = Modal.getOrCreateInstance(modal.value)
  if(toClose) toClose.hide()
}
</script>


<template>
<!-- trigger / button -->
<span :ref="`${id}-modal-trigger-wrapper`">
  <slot name="trigger">
    <button class="btn btn-info" :data-bs-target="'#'+id" data-bs-toggle="modal">
      Open modal
    </button>
  </slot>
</span>

  <Teleport to="body">
    <section :ref="id + '-modal-ref'" :id class="modal fade" :data-bs-backdrop="isStatic ? 'static': 'dynamic'">
      <div class="modal-dialog" :class="`${position == 'center' ? 'modal-dialog-centered' : ''} modal-${size}`">
        <div class="modal-content">

          <section class="d-flex flex-column">
            <div class="modal-header">
            <!-- header -->
              <slot name="header">
                  <button type="button" class="btn-close justify-self-end" data-bs-dismiss="modal"></button>
              </slot>
            </div>

            <div class="modal-body">
              <!-- body -->
              <slot name="body">
                
              </slot>
            </div>
          </section>
      
        </div>
      </div>
    </section>
  </Teleport>
</template>


<style lang="scss" scoped>
.modal-content{
  min-height: 15dvw;
}

.modal{
  overflow: hidden;
}

.modal.fade .modal-dialog{
  transition: transform .15s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform: translate(0, 50px);
}

.modal.fade.show .modal-dialog {
  transform: none
}
</style>