import React from 'react'
import * as THREE from 'three'

function Contact() {

  //scene
  const scene = new THREE.Scene()

  //object
  const geometry = new THREE.BoxGeometry(1,1,1)
  const material = new THREE.MeshBasicMaterial({color: 0xff0000})
  const mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)

  //sizes
  const sizes = {
    width: 800,
    height: 600
  }

  //camera
  const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height)
  camera.position.x = 3
  camera.position.y = 3
  camera.position.z = 3
  scene.add(camera)

  //renderer
  const canvas = document.querySelector('.webgl')
  console.log(canvas)
  const renderer = new THREE.WebGL1Renderer({
    canvas: canvas
  })
  renderer.setSize(sizes.width, sizes.height)

  renderer.render(scene, camera)

  return (
    <canvas className='webgl'>
    </canvas>
  )
}

export default Contact