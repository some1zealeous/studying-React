# this repo is my learning tracker for React.  
> Starting with basic react Architecture  

``` javascript
const componentName = () => {
    return (
        <>
        <h1>User Content</h1>
        </>
    )
}
```

> Architecture Implementation

``` javascript
import React from "react";

const greetings = () => {
    const userName = "SomeOne";

    return (
        <>
        <h1>Hello, {userName}</h1>
        <p>Welcome to React Learning Path</p>
        </>
    );
};

export const UserCard = () => {
  return (
    <div className="user-card">
      <img src="/avatar.jpg" alt="User" />
      <h3>John Doe</h3>
      <p>Web Developer</p>
    </div>
  );
};


export default greetings;
```

