<template>
  <div class="tasklist-container">
    <h2>Lista de Tarefas</h2>

    <div class="controls">
      <button class="btn add">Adicionar nova tarefa</button>
      <button class="btn toggle-all">Marcar todas</button>
      <button class="btn clear">Limpar concluídas</button>
    </div>

    <div class="tasks-container">
      <div class="pending-tasks">
        <h3>Tarefas Pendentes</h3>
        <TaskItem
          :task="tasks[0]"
          @toggle-done="toggleTaskDone"
          @remove-task="removeTask"
        />
      </div>
      <div class="completed-tasks">
        <h3>Tarefas Concluídas</h3>
        <TaskItem
          :task="tasks[1]"
          @toggle-done="toggleTaskDone"
          @remove-task="removeTask"
        />
      </div>
    </div>

    <span>Componente dos contadores</span>
  </div>
</template>

<script lang="ts">
  import TaskItem from './TaskItem.vue'

  export default {
    name: 'TaskList',
    components: {
      TaskItem,
    },
    data() {
      return {
        tasks: [
          { id: 1234, done: false },
          { id: 4321, done: true },
        ],
      }
    },
    methods: {
      removeTask(taskId: number) {
        this.tasks = this.tasks.filter((task) => {
          return task.id !== taskId
        })
      },
      toggleTaskDone(taskId: number) {
        const task = this.tasks.find((task) => {
          return task.id === taskId
        })
        if (task) {
          task.done = !task.done
        }
      },
    },
  }
</script>

<style scoped>
  .tasklist-container {
    max-width: 1000px;
    margin-inline: auto;
    padding: 20px;
  }

  h2 {
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid #f0f0f0;

    color: #3498db;
    text-align: center;
  }

  .controls {
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
  }

  .btn {
    padding: 10px 20px;
    border: none;
    border-radius: 6px;

    font-weight: bold;
    font-size: 14px;
    color: white;
    cursor: pointer;

    transition: all 0.3s;

    &:hover {
      transform: translateY(-2px);
    }
  }

  .add {
    background-color: #2ecc71;

    &:hover {
      background-color: #27ae60;
    }
  }

  .toggle-all {
    background-color: #3498db;

    &:hover {
      background-color: #2980b9;
    }
  }

  .clear {
    background-color: #e74c3c;

    &:hover {
      background-color: #c0392b;
    }
  }

  .tasks-container {
    margin-bottom: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }

  .pending-tasks,
  .completed-tasks {
    padding: 20px;
    border-radius: 8px;

    h3 {
      margin-top: 0;
      margin-bottom: 15px;
      color: #2c3e50;
      text-align: center;
    }
  }

  .pending-tasks {
    background-color: #f9f9f9;
    border: 2px solid #eee;
  }

  .completed-tasks {
    background-color: #f1fff1;
    border-color: #d4edda;
  }
</style>
