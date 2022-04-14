# useState

`useState` 是一个让你在组件里添加状态变量的 React Hook

`const [state, setState] = useState(initialState)`

## 用法

### 向组件内新增状态

在组件顶层调用 `useState` 以声明一个或多个状态变量

```jsx
import {useState} from 'react';

function MyComponent() {
    const [age, setAge] = useState(42);
    const [name, setName] = useState('Taylor');
    // ...
}
```

按照约定俗成的习惯，一般使用数组解构`[something, setSomething]`来命名状态变量。

`useState` 返回一个恰好有两个项的数组：

1. 状态变量的当前状态，被初始化为传入的参数
2. set 函数允许在响应交互的时候改变为任何值

为了更新屏幕上的内容，可以用以下的状态调用 set 函数：

```jsx
function handleClick() {
    setName('Robin');
}
```

React 会保存下一个状态，用新的值渲染组件，并且更新UI

***踩坑***

调用 set 函数无法改变已执行的代码的当前状态

```jsx
function handleClick() {
    setName('Robin');
    console.log(name); // Still "Taylor"!
}
```

它只影响***下一次***渲染开始 `useState` 会返回的值。

### 基于前一个状态进行更新

假设 age 是 42，这个处理程序调用三次 `setAge(age + 1)`:

```jsx
function handleClick() {
    setAge(age + 1); // setAge(42 + 1)
    setAge(age + 1); // setAge(42 + 1)
    setAge(age + 1); // setAge(42 + 1)
}
```

但是，一次点击之后，age 只会是 43 而不是 45！这是因为调用 set 函数不会更新已经在运行中的代码的 age 状态变量。所以每一次调用 `setAge(age + 1)` 会变成 `setAge(43)`。
为了解决这个问题，你可以传递一个更新函数给setAge，而不是传递下一个状态:

```jsx
function handleClick() {
    setAge(a => a + 1); // setAge(42 => 43)
    setAge(a => a + 1); // setAge(43 => 44)
    setAge(a => a + 1); // setAge(44 => 45)
}
```

这里的 `a => a + 1` 是更新函数，它获取挂起的状态，并以此计算出下一次的状态
React 将更新函数放到一个队列中，然后在下一次渲染的时候，它会以同样的顺序调用他们：

1. `a => a + 1` 将接收到42作为挂起状态，并返回43作为下一个状态
2. `a => a + 1` 将接收到43作为挂起状态，并返回44作为下一个状态
3. `a => a + 1` 将接收到44作为挂起状态，并返回45作为下一个状态

没有其他排队的更新，所以React最终会将45存储为当前状态

按照惯例，挂起的状态参数通常以状态变量名称的第一个字母命名，比如 `a`对应`age`。然而，你也可以称它为“prevAge”或其他你觉得更清楚的东西。

React可能会在开发过程中调用更新器两次，以验证它们是纯函数。

### 更新状态里面的对象和数组

您可以将对象和数组放入状态中。在React中，state是只读的，所以应该替换它而不是改变现有的对象。例如，如果有一个在state里面的对象，不要像这样更新它:

```jsx
// 🚩 Don't mutate an object in state like this:
form.firstName = 'Taylor';
```

相反，通过创建一个新的对象来替换整个对象:

```jsx
// ✅ Replace state with a new object
setForm({
    ...form,
    firstName: 'Taylor'
});
```

### 避免重新创建初始状态

React会保存初始状态一次，并在下一次呈现时忽略它。

```jsx
function TodoList() {
    const [todos, setTodos] = useState(createInitialTodos());
    // ...
}
```

虽然createInitialTodos()的结果只用于初始渲染，但仍然在每次渲染中调用这个函数。如果创建大型数组或执行昂贵的计算，这可能是一种浪费。

为了解决这个问题，你可以把它作为一个初始化函数传递给useState:

```jsx
function TodoList() {
    const [todos, setTodos] = useState(createInitialTodos);
    // ...
}
```

注意，您传递的是createInitialTodos，这是函数本身，而不是createInitialTodos()，这是调用它的结果。如果你将一个函数传递给useState, React只会在初始化时调用它。

### 用 key 重置状态

通常，在呈现列表时，您可能会遇到key属性。然而，它还有另一个目的。

您可以通过向组件传递不同的 key 来重置组件的状态。在本例中，Reset按钮更改了版本状态变量，我们将其作为key传递给Form。当key发生变化时，React会从头开始重新创建Form组件(及其所有子组件)，因此它的状态会被重置。

```jsx
import {useState} from 'react';

export default function App() {
    const [version, setVersion] = useState(0);

    function handleReset() {
        setVersion(version + 1);
    }

    return (
        <>
            <button onClick={handleReset}>Reset</button>
            <Form key={version}/>
        </>
    );
}

function Form() {
    const [name, setName] = useState('Taylor');

    return (
        <>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <p>Hello, {name}.</p>
        </>
    );
}
```

