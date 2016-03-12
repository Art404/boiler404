import React from 'react'

class Home extends React.Component {
  static displayName = 'Home'

  render() {
    return (
      <div className="Home">
        <h1>{'Home Page'}</h1>
        <p>
          {`I think that’s a responsibility that I have, to push possibilities, to show people,
            this is the level that things could be at. So when you get something that has the name
            Kanye West on it, it’s supposed to be pushing the furthest possibilities.
            I will be the leader of a company that ends up being worth billions of dollars, because
            I got the answers. I understand culture. I am the nucleus.`}
        </p>
      </div>
    )
  }
}

export default Home
