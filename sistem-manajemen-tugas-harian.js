class Task {
  constructor(id, name, status, creatAt){
    this.id = id;
    this.name = name;
    this.status = status;
    this.creatAt = creatAt;
  }
}


class TaskManager{
  #tasks = [];

  addTask(name){
    const task = new Task(this.#tasks.length + 1, name, "belum selesai", new Date());
    this.#tasks.push(task);
    console.log(`Tugas ${task.id} ditambahkan: ${task.name}`);
  }

  showTasks(){
    if (this.#tasks.length === 0) {
      console.log("belum ada tugas");
    } else {
      this.#tasks.forEach(task => console.log(
        `ID Tugas: ${task.id}
          Nama Tugas: ${task.name}
          Status: ${task.status}
          Dibuat Pada: ${task.createdAt}`
      ));
    }
  }

  editStatus(id){
    const task = this.#tasks.find(t => t.id === id)  
    if (task) {
      task.status = 'sudah selesai'
      console.log(`Tugas id ${id} telah diselesaikan.`)
    } else {
      console.error(`Tugas id ${id} tidak ditemukan.`);
    }
  }

  deleteTask(id){
    const index = this.#tasks.findIndex(t => t.id === id)  
    if (index !== -1) {
      this.#tasks.splice(index, 1);
      console.log(`Tugas id ${id} telah dihapus.`)
    } else {
      console.error(`Tugas id ${id} tidak ditemukan.`)
    }
  }
}

const callTask = new TaskManager(); 

callTask.addTask("Math")
callTask.addTask("science")
callTask.showTasks()