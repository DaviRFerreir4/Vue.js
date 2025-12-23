<template>
  <div class="task-item">
    <span class="task-id"># {{ task?.id }}</span>
    <span class="task-status">{{ statusText }}</span>
    <button class="btn toggle" @click="toggleDone">
      {{ btnToggleText }}
    </button>
    <button class="btn remove" @click="removeTask">Remover</button>
  </div>
</template>

<script lang="ts">
  import type { PropType } from 'vue'

  export default {
    name: 'TaskItem',
    props: {
      task: {
        type: Object as PropType<ITask>,
      },
    },
    computed: {
      btnToggleText() {
        return this.task?.done ? 'Desfazer' : 'Concluir'
      },
      statusText() {
        return this.task?.done ? 'Concluída' : 'Pendente'
      },
    },
    methods: {
      toggleDone() {
        this.$emit('toggle-done', this.task?.id)
      },
      removeTask() {
        this.$emit('remove-task', this.task?.id)
      },
    },
    emits: ['toggle-done', 'remove-task'],
  }
</script>

<style scoped>
  .task-item {
    margin-bottom: 8px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    display: flex;
    align-items: center;

    background-color: white;

    transition: all 0.3s;
  }

  .task-id {
    margin-right: 10px;

    font-weight: bold;
    color: #7f8c8d;
  }

  .task-status {
    flex-grow: 1;
  }

  .btn {
    color: white;
    padding: 10px 15px;
  }

  .toggle {
    background-color: #f39c12;

    &:hover {
      background-color: #e67e22;
    }
  }

  .remove {
    background-color: #e74c3c;

    &:hover {
      background-color: #c0392b;
    }
  }
</style>
