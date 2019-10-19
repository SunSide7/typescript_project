interface UserInterface {
	name: string
	age: number
	logInfo: () => void
	id?: any

}

const user: UserInterface = {
	name: 'Alex',
	age: 35,
	logInfo() {
		console.log(this.name + ' ' + this.age)
	}
}