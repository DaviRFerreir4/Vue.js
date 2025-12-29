<template>
  <div class="tasklist-container">
    <h2 v-once>Lista de Tarefas</h2>

    <div class="controls">
      <button class="btn" :class="btnAddClass" :onclick="handleShowForm">
        {{ btnAddText }}
      </button>
      <button class="btn toggle-all">Marcar todas</button>
      <button class="btn clear">Limpar concluídas</button>
    </div>

    <div class="add-task-container" v-if="showForm">
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        class="task-input"
        v-model="newTaskTitle"
      />
      <button class="btn add" :onclick="addTask" v-once>Adicionar</button>
    </div>

    <div class="tasks-container">
      <div class="pending-tasks">
        <h3 v-once>Tarefas Pendentes</h3>

        <p v-if="pendingTasks.length === 0">Não há tarefas pendentes</p>

        <div v-else>
          <TaskItem
            :task="task"
            @toggle-done="toggleTaskDone"
            @remove-task="removeTask"
            v-for="task in pendingTasks"
            :key="task.id"
          />
        </div>
      </div>
      <div class="completed-tasks">
        <h3 v-once>Tarefas Concluídas</h3>

        <p v-if="completedTasks.length === 0">Não há tarefas concluídas</p>

        <div v-else>
          <TaskItem
            :task="task"
            @toggle-done="toggleTaskDone"
            @remove-task="removeTask"
            v-for="task in completedTasks"
            :key="task.id"
          />
        </div>
      </div>
    </div>

    <div>
      <h3 v-once>Resumo</h3>
      <p v-if="tasks.length === 0">Você ainda não possui tarefas</p>
      <p v-else-if="pendingTasks.length > 0 && completedTasks.length === 0">
        Você possui {{ pendingTasks.length }} tarefas pendentes
      </p>
      <p v-else-if="completedTasks.length > 0 && pendingTasks.length === 0">
        Todas as tarefas foram concluídas
      </p>
      <p v-else>
        Você tem {{ pendingTasks.length }} pendentes e
        {{ completedTasks.length }} concluídas
      </p>
    </div>

    <div class="watch-output">
      <h3 v-once>Saída do Watch ( Console )</h3>
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
          { id: 1234, title: 'Tarefa exemplo 1', done: false },
          { id: 4321, title: 'Tarefa exemplo 2', done: true },
        ],
        watchLogs: [] as string[],
        newTaskTitle: '',
        showForm: false,
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
      addTask() {
        if (this.newTaskTitle.trim() === '') return

        this.tasks.push({
          id: Number(String(Date.now()).slice(-4)),
          title: this.newTaskTitle,
          done: false,
        })
      },
      handleShowForm() {
        this.showForm = !this.showForm
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
      btnAddText() {
        if (this.showForm) {
          return 'Fechar'
        }
        return 'Adicionar nova tarefa'
      },
      btnAddClass() {
        if (this.showForm) {
          return 'clear'
        }
        return 'add'
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

  .add-task-container {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-bottom: 20px;
  }

  .task-input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
    width: 300px;
  }
</style>
