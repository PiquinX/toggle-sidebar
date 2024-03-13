<div class='flex justify-between'>
  <h1>Toggle-navbar</h1>
  <a href='https://github.com/PiquinX/toggle-sidebar' >
    <img 
      style='width: "100px"; height:100px' 
      src='./public/GitHub-Logo.png' 
    />
  </a>
</div>


### Installation

Using npm.
```CMD
npm install toggle-nav
```

Using yarn.
```CMD
yarn add toggle-nav
 ```

#### How to import.

```typescript 
import { SideBarContainer, SideBar, CloseButton } from 'toggle-navbar'
```

#### How to use it.

This component allows you to create a customizable desplegable navbar, which is great for responsive designs.

What you may add/customize:
* An Array of values so that when they change the SideBar will be opened or closed.
* Styles to the SideBar.
* Styles to the opener button.
* From Which side will the Sidebar appear.

```typescript
function Root (): JSX.Element {
  const location = useLocation()
  const [counter, setCounter] = useState<number>(0)

  return (
    <div className='flex gap-10 p-10'>
      {/* These dependency arrays allow you to add any dependency
      so that when it changes, the SideBar will be opened or closed. 
      In this case, I used location to close the 
      SideBar each time the path changes. */}
      <SideBarContainer
        openDependency={[counter]}
        closeDependency={[location]}
      >
        {/* The button is the element that will be displayed in your 
        app by default and the one that will open the SideBar. 
        The rest are style only props. */}
        <SideBar
          buttonClass='w-8 h-8'
          buttonContent={<img className='w-max h-max' src={barsIcon} />}
          navClass='bg-green-500'
          side='left'
        >
          {/* The CloseButton will close the SideBar. */}
          <CloseButton className='absolute text-4xl top-5 left-5'>
            x
          </CloseButton>
          <div className='flex flex-col gap-10 pt-60'>
            <Link to='/'>Home</Link>
            <Link to='/info'>Info</Link>
          </div>
        </SideBar>
    </SideBarContainer>
    <div>{counter}</div>

    <div
      className='text-2xl'
      onClick={() => { setCounter(counter + 1) }}
    >
      +
    </div>
  </div>
  )
}

export default Root
```


##### Here is the Link to the Github repo. 

https://github.com/PiquinX/toggle-sidebar