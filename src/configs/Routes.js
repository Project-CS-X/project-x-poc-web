import React from 'react'

const Test1 = () => (
    <p>Test 1</p>
)
const Test2 = () => (
    <p>Test 2</p>
)
const Test3 = () => (
    <p>Test 3</p>
)

const routes = [
    {
        path: '/test1',
        component: Test1
    }, {
        path: '/test2',
        component: Test2
    }, {
        path: '/test3',
        component: Test3
    }
]

export default routes