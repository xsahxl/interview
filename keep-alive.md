# keep-alive 组件有什么作用？

如果你需要在组件切换的时候，保存一些组件的状态防止多次渲染，就 可以使用 keep-alive 组件包裹需要保存的组件

对于 keep-alive 组件来说，它拥有两个独有的生命周期钩子函数， 分别为 activated 和 deacivated, 用 keep-alive 包裹的组件在切换的时候不会进行销毁，而是缓存到内存中并执行 deactivated 钩子函数，下次渲染的时候会执行 activated 钩子函数
