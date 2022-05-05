import React, { useState } from 'react'
import Home from '../src/components/screens/Home/Home'
import Monday from './assets/db/Monday'
import Header from './components/Header/Header'
import { Routes, Route } from 'react-router-dom'
import Tuesday from './assets/db/Tuesday'
import Wednesday from './assets/db/Wednesday'
import Thursday from './assets/db/Thursday'
import Friday from './assets/db/Friday'
import Saturday from './assets/db/Saturday'
import Sunday from './assets/db/Sunday'

const App = () => {
	const [monday, setMonday] = useState(Monday)
	const [tuesday, setTuesday] = useState(Tuesday)
	const [wednesday, setWednesday] = useState(Wednesday)
	const [thursday, setThursday] = useState(Thursday)
	const [friday, setFriday] = useState(Friday)
	const [saturday, setSaturday] = useState(Saturday)
	const [sunday, setSunday] = useState(Sunday)

	const mondayList = [...monday]
	const tuesdayList = [...tuesday]
	const wednesdayList = [...wednesday]
	const thursdayList = [...thursday]
	const fridayList = [...friday]
	const saturdayList = [...saturday]
	const sundayList = [...sunday]

	const changeMonday = id => {
		mondayList.forEach(todo => {
			const current = todo.items.find(tId => tId._id === id)
			current.isCompleted = !current.isCompleted
		})
		setMonday(mondayList)
	}

	const changeTuesday = id => {
		tuesdayList.forEach(todo => {
			const current = todo.items.find(tId => tId._id === id)
			current.isCompleted = !current.isCompleted
		})
		setTuesday(tuesdayList)
	}

	const changeWednesday = id => {
		wednesdayList.forEach(todo => {
			const current = todo.items.find(tId => tId._id === id)
			current.isCompleted = !current.isCompleted
		})
		setWednesday(wednesdayList)
	}

	const changeThursday = id => {
		thursdayList.forEach(todo => {
			const current = todo.items.find(tId => tId._id === id)
			current.isCompleted = !current.isCompleted
		})
		setThursday(thursdayList)
	}

	const changeFriday = id => {
		thursdayList.forEach(todo => {
			const current = todo.items.find(tId => tId._id === id)
			current.isCompleted = !current.isCompleted
		})
		setFriday(fridayList)
	}

	const changeSaturday = id => {
		thursdayList.forEach(todo => {
			const current = todo.items.find(tId => tId._id === id)
			current.isCompleted = !current.isCompleted
		})
		setSaturday(saturdayList)
	}

	const changeSunday = id => {
		thursdayList.forEach(todo => {
			const current = todo.items.find(tId => tId._id === id)
			current.isCompleted = !current.isCompleted
		})
		setSunday(sundayList)
	}

	const removeMonday = id => {
		let current = []
		mondayList.forEach(todo => {
			current = todo.items.filter(t => t._id !== id)
			todo.items = current
		})
		setMonday(mondayList)
	}

	const removeTuesday = id => {
		let current = []
		tuesdayList.forEach(todo => {
			current = todo.items.filter(t => t._id !== id)
			todo.items = current
		})
		setTuesday(tuesdayList)
	}

	const removeWednesday = id => {
		let current = []
		wednesdayList.forEach(todo => {
			current = todo.items.filter(t => t._id !== id)
			todo.items = current
		})
		setWednesday(wednesdayList)
	}

	const removeThursday = id => {
		let current = []
		thursdayList.forEach(todo => {
			current = todo.items.filter(t => t._id !== id)
			todo.items = current
		})
		setFriday(thursdayList)
	}

	const removeFriday = id => {
		let current = []
		thursdayList.forEach(todo => {
			current = todo.items.filter(t => t._id !== id)
			todo.items = current
		})
		setFriday(thursdayList)
	}

	const removeSaturday = id => {
		let current = []
		thursdayList.forEach(todo => {
			current = todo.items.filter(t => t._id !== id)
			todo.items = current
		})
		setSaturday(saturdayList)
	}
	const removeSunday = id => {
		let current = []
		thursdayList.forEach(todo => {
			current = todo.items.filter(t => t._id !== id)
			todo.items = current
		})
		setSunday(sundayList)
	}

	const addMonday = title => {
		mondayList.forEach(todo => {
			const newItem = {
				_id: Math.floor(Math.random() * 100000),
				title,
				isCompleted: false,
				day:
					new Date().getFullYear() +
					'г.' +
					' ' +
					new Date().getMonth() +
					'м.' +
					' ' +
					new Date().getDate() +
					'д.' +
					' ' +
					new Date().getHours() +
					' : ' +
					' ' +
					new Date().getMinutes(),
			}

			todo.items.push(newItem)
		})
		setMonday(mondayList)
	}

	const addTuesday = title => {
		tuesdayList.forEach(todo => {
			const newItem = {
				_id: Math.floor(Math.random() * 100000),
				title,
				isCompleted: false,
				day:
					new Date().getFullYear() +
					'г.' +
					' ' +
					new Date().getMonth() +
					'м.' +
					' ' +
					new Date().getDate() +
					'д.' +
					' ' +
					new Date().getHours() +
					' : ' +
					' ' +
					new Date().getMinutes(),
			}

			todo.items.push(newItem)
		})
		setTuesday(tuesdayList)
	}

	const addWednesday = title => {
		wednesdayList.forEach(todo => {
			const newItem = {
				_id: Math.floor(Math.random() * 100000),
				title,
				isCompleted: false,
				day:
					new Date().getFullYear() +
					'г.' +
					' ' +
					new Date().getMonth() +
					'м.' +
					' ' +
					new Date().getDate() +
					'д.' +
					' ' +
					new Date().getHours() +
					' : ' +
					' ' +
					new Date().getMinutes(),
			}

			todo.items.push(newItem)
		})
		setWednesday(wednesdayList)
	}

	const addThursday = title => {
		thursdayList.forEach(todo => {
			const newItem = {
				_id: Math.floor(Math.random() * 100000),
				title,
				isCompleted: false,
				day:
					new Date().getFullYear() +
					'г.' +
					' ' +
					new Date().getMonth() +
					'м.' +
					' ' +
					new Date().getDate() +
					'д.' +
					' ' +
					new Date().getHours() +
					' : ' +
					' ' +
					new Date().getMinutes(),
			}

			todo.items.push(newItem)
		})
		setThursday(thursdayList)
	}

	const addFriday = title => {
		thursdayList.forEach(todo => {
			const newItem = {
				_id: Math.floor(Math.random() * 100000),
				title,
				isCompleted: false,
				day:
					new Date().getFullYear() +
					'г.' +
					' ' +
					new Date().getMonth() +
					'м.' +
					' ' +
					new Date().getDate() +
					'д.' +
					' ' +
					new Date().getHours() +
					' : ' +
					' ' +
					new Date().getMinutes(),
			}
			todo.items.push(newItem)
		})
		setFriday(fridayList)
	}
					
					const addSaturday = title => {
						thursdayList.forEach(todo => {
							const newItem = {
								_id: Math.floor(Math.random() * 100000),
								title,
								isCompleted: false,
								day:
									new Date().getFullYear() +
									'г.' +
									' ' +
									new Date().getMonth() +
									'м.' +
									' ' +
									new Date().getDate() +
									'д.' +
									' ' +
									new Date().getHours() +
									' : ' +
									' ' +
									new Date().getMinutes(),
							}		
							todo.items.push(newItem)
						})
						setSaturday(saturdayList)
					}
				
							const addSunday = title => {
								thursdayList.forEach(todo => {
									const newItem = {
										_id: Math.floor(Math.random() * 100000),
										title,
										isCompleted: false,
										day:
											new Date().getFullYear() +
											'г.' +
											' ' +
											new Date().getMonth() +
											'м.' +
											' ' +
											new Date().getDate() +
											'д.' +
											' ' +
											new Date().getHours() +
											' : ' +
											' ' +
											new Date().getMinutes(),
									}
									todo.items.push(newItem)
								})
								setSunday(sundayList)
							}

	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route
					path='/monday'
					element={
						<Home
							todos={monday}
							changeTodos={changeMonday}
							removeTodos={removeMonday}
							addTodo={addMonday}
						/>
					}
				/>
				<Route
					path='/tuesday'
					element={
						<Home
							todos={tuesday}
							changeTodos={changeTuesday}
							removeTodos={removeTuesday}
							addTodo={addTuesday}
						/>
					}
				/>
				<Route
					path='/wednesday'
					element={
						<Home
							todos={wednesday}
							changeTodos={changeWednesday}
							removeTodos={removeWednesday}
							addTodo={addWednesday}
						/>
					}
				/>
				<Route
					path='/thursday'
					element={
						<Home
							todos={thursday}
							changeTodos={changeThursday}
							removeTodos={removeThursday}
							addTodo={addThursday}
						/>
					}
				/>
				<Route
					path='/friday'
					element={
						<Home
							todos={friday}
							changeTodos={changeFriday}
							removeTodos={removeFriday}
							addTodo={addFriday}
						/>
					}
				/>
				<Route
					path='/saturday'
					element={
						<Home
							todos={saturday}
							changeTodos={changeSaturday}
							removeTodos={removeSaturday}
							addTodo={addSaturday}
						/>
					}
				/>
				<Route
					path='/sunday'
					element={
						<Home
							todos={sunday}
							changeTodos={changeSunday}
							removeTodos={removeSunday}
							addTodo={addSunday}
						/>
					}
				/>
			</Routes>
		</div>
	)
}

export default App;
