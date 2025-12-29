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
          :task="task"
          @toggle-done="toggleTaskDone"
          @remove-task="removeTask"
          v-for="task in pendingTasks"
          :key="task.id"
        />
      </div>
      <div class="completed-tasks">
        <h3>Tarefas Concluídas</h3>
        <TaskItem
          :task="task"
          @toggle-done="toggleTaskDone"
          @remove-task="removeTask"
          v-for="task in completedTasks"
          :key="task.id"
        />
      </div>
    </div>

    <div class="watch-output">
      <h3>Saída do Watch ( Console )</h3>
      <div class="log-container">
        <p v-for="log in watchLogs" :key="log.length">{{ log }}</p>
      </div>
    </div>
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
        watchLogs: [] as string[],
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
      logWatch(message: string) {
        this.watchLogs.unshift(
          `[${new Date().toLocaleDateString()}]  ${message}`
        )
      },
    },
    watch: {
      tasks: {
        handler(newValue: ITask[], oldValue: ITask[]) {
          const message = `Lista de Tasks mudou! Itens: ${newValue.length}`
          this.logWatch(message)
          // if (oldValue) {
          //   const modified = newValue.filter((newTasks) => {
          //     const oldTask = oldValue.find((oldTasks) => {
          //       return oldTasks.id === newTasks.id
          //     })
          //     return (
          //       oldTask && JSON.stringify(newTasks) !== JSON.stringify(oldTask)
          //     )
          //   })
          //   if (modified.length > 0) {
          //     const modifyMsg = `Tarefas Modificadas: ${modified
          //       .map((task) => {
          //         return task.id
          //       })
          //       .join(', ')}`
          //     this.logWatch(modifyMsg)
          //   }
          // }
        },
        deep: true,
        immediate: true,
      },
    },
    computed: {
      completedTasks() {
        return this.tasks.filter((task) => task.done)
      },
      pendingTasks() {
        return this.tasks.filter((task) => !task.done)
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

  .watch-output {
    padding: 15px;
    border-radius: 6px;

    text-align: center;
    color: white;
    background-color: #2c3e50;
  }

  .log-container {
    max-height: 200px;
    margin-top: 10px;
    padding: 10px;
    border-radius: 4px;
    display: grid;
    overflow-y: auto;

    font-family: monospace;
    background-color: #1a252f;

    p {
      margin-block: 6px;
    }
  }
</style>
