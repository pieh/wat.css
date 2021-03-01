import React from "react"

import(`../components/testing.js`).then(w => {
  console.log(w)
})

export default function Home() {
  return <div>Hello world!</div>
}
