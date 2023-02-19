import {useEffect,useState} from 'react'
import * as THREE from "three";
import Map from '../Map';
import { TweenMax,Power1 } from 'gsap/gsap-core';
import Building from '../Building';
import Modal from '../Modal';
// import Navbar from '../Navbar';

const City2 = () => {
  const [ismodalshown, setismodalshown] = useState(false)
  var camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 1, 500);
  // var navy=0,navx=0;
    useEffect(() => {
        var renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        function mathRandom(num = 8) {
          var numValue = - Math.random() * num + Math.random() * num;
          return numValue;
        };

        if (window.innerWidth > 800) {
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.PCFSoftShadowMap;
            renderer.shadowMap.needsUpdate = true;
        };

        document.body.appendChild(renderer.domElement);

        window.addEventListener('resize', onWindowResize, false);
        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };


        camera.position.set(0, 2, 14);

        var scene = new THREE.Scene();
        var smoke = new THREE.Object3D();

        var uSpeed = 0.002;

        var setcolor1 = 0xffd05e;
        var setcolor = 0xFF6347;

        scene.background = new THREE.Color(setcolor);
        scene.fog = new THREE.Fog(setcolor1, 5, 30);

        var createCarPos=true;
        const loader = new THREE.ObjectLoader();

        var jso= [
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "336E2365-5D3B-461B-8378-C31F1635D48F",
                "type": "BoxGeometry",
                "width": 1,
                "height": 2,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "5FDBC469-A2C1-4406-85BA-452D74503C11",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "F625FCC7-2A01-4343-A636-E8D78F15BE53",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "279EA597-61ED-4175-9202-C28B632C1DCF",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, -1, 1],
              "geometry": "336E2365-5D3B-461B-8378-C31F1635D48F",
              "material": "5FDBC469-A2C1-4406-85BA-452D74503C11",
              "children": [
                {
                  "uuid": "175B2C69-CD88-419A-81CB-BD133477AD13",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "336E2365-5D3B-461B-8378-C31F1635D48F",
                  "material": "F625FCC7-2A01-4343-A636-E8D78F15BE53"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "ABC7DEA3-153F-44C7-8EF3-AF8329F757D0",
                "type": "BoxGeometry",
                "width": 1,
                "height": 6,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "3DF63E7A-DE67-4FA7-BB7B-3D23FCB1B27A",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "95ED6493-50B8-4DC1-906C-467AF866ACC7",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "343C7CA7-5209-49C9-9E27-6AC1177FC884",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 3, 0, -2, 1],
              "geometry": "ABC7DEA3-153F-44C7-8EF3-AF8329F757D0",
              "material": "3DF63E7A-DE67-4FA7-BB7B-3D23FCB1B27A",
              "children": [
                {
                  "uuid": "FA44ACE0-61F5-40E2-AB6E-DA57A8F8FFE1",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "ABC7DEA3-153F-44C7-8EF3-AF8329F757D0",
                  "material": "95ED6493-50B8-4DC1-906C-467AF866ACC7"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "A951D255-7EF2-41B4-9578-8EEA9874B412",
                "type": "BoxGeometry",
                "width": 1,
                "height": 3,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "17343D0C-F2C0-423E-859B-E1F1618C52FE",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "9687C1C4-7E62-4B05-9899-016D954A2522",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "31917BD6-589C-40D8-87DF-7D8A062CCD51",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, -2, 1],
              "geometry": "A951D255-7EF2-41B4-9578-8EEA9874B412",
              "material": "17343D0C-F2C0-423E-859B-E1F1618C52FE",
              "children": [
                {
                  "uuid": "84199C57-0808-4AA6-833C-62D334677CEF",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "A951D255-7EF2-41B4-9578-8EEA9874B412",
                  "material": "9687C1C4-7E62-4B05-9899-016D954A2522"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "73993300-2D31-4260-B5D7-3FBB5B222AF5",
                "type": "BoxGeometry",
                "width": 1,
                "height": 5,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "3956585C-C117-42D5-8145-1E48B64B0046",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "585DB8A2-CF8A-4F8C-AA67-F7FB020DD9F6",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "D17141E4-0FB3-4220-B3B5-92D759A299DA",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -1, 0, -4, 1],
              "geometry": "73993300-2D31-4260-B5D7-3FBB5B222AF5",
              "material": "3956585C-C117-42D5-8145-1E48B64B0046",
              "children": [
                {
                  "uuid": "DB41A926-0464-4B69-807B-D88F3C8F9E78",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "73993300-2D31-4260-B5D7-3FBB5B222AF5",
                  "material": "585DB8A2-CF8A-4F8C-AA67-F7FB020DD9F6"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "10C3731C-E76A-4A0E-91CD-68BBDA7D4158",
                "type": "BoxGeometry",
                "width": 1,
                "height": 7,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "3D27EABA-B7D7-4285-8601-759C4407E8BB",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "A45EC875-6798-4FFA-B01F-A2572C68F8BB",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "EBCC8D99-EA0E-4857-9B81-AA609D02BE78",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 2, 0, 0, 1],
              "geometry": "10C3731C-E76A-4A0E-91CD-68BBDA7D4158",
              "material": "3D27EABA-B7D7-4285-8601-759C4407E8BB",
              "children": [
                {
                  "uuid": "947B8C67-9A17-4E98-8FD5-C2586B3077F6",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "10C3731C-E76A-4A0E-91CD-68BBDA7D4158",
                  "material": "A45EC875-6798-4FFA-B01F-A2572C68F8BB"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "AA062CA9-85BC-4920-88EB-A66DA7DE001E",
                "type": "BoxGeometry",
                "width": 1,
                "height": 5,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "D62754FD-3B02-4C2E-8F88-E694397B6026",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "AA324EE7-F294-4CB8-BBD7-51E2824CEE1B",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "115A9BF0-9412-42A1-94B4-C25B30975162",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -1, 0, -1, 1],
              "geometry": "AA062CA9-85BC-4920-88EB-A66DA7DE001E",
              "material": "D62754FD-3B02-4C2E-8F88-E694397B6026",
              "children": [
                {
                  "uuid": "4B1F99EB-7426-4412-A162-C6886A52EBAF",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "AA062CA9-85BC-4920-88EB-A66DA7DE001E",
                  "material": "AA324EE7-F294-4CB8-BBD7-51E2824CEE1B"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "55482328-B844-4F2E-8F2B-A581B5632175",
                "type": "BoxGeometry",
                "width": 1,
                "height": 1,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "43711A5B-27B2-42A6-8FC4-C99AD470D756",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "3B1DAE51-432B-4AA5-ADC4-CBC317710AED",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "B0815AF6-286F-4C8F-BA36-386437E481F7",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 2, 0, 0, 1],
              "geometry": "55482328-B844-4F2E-8F2B-A581B5632175",
              "material": "43711A5B-27B2-42A6-8FC4-C99AD470D756",
              "children": [
                {
                  "uuid": "8BACE6A0-6131-43D1-B947-DCEC71596485",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "55482328-B844-4F2E-8F2B-A581B5632175",
                  "material": "3B1DAE51-432B-4AA5-ADC4-CBC317710AED"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "564825E2-FBD9-438B-B5D0-E673F40CA082",
                "type": "BoxGeometry",
                "width": 1,
                "height": 5,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "BA78668D-B327-43D4-8946-2F5D58FC11A5",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "BACC4AA5-5E83-41AF-A3A5-A1B809E88313",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "A571D979-9EC9-4CA5-A919-1F4861A000DC",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -5, 0, -1, 1],
              "geometry": "564825E2-FBD9-438B-B5D0-E673F40CA082",
              "material": "BA78668D-B327-43D4-8946-2F5D58FC11A5",
              "children": [
                {
                  "uuid": "86A1AF45-7D5E-4889-9BEC-9CC2D7B26120",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "564825E2-FBD9-438B-B5D0-E673F40CA082",
                  "material": "BACC4AA5-5E83-41AF-A3A5-A1B809E88313"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "CCB7A6A1-62C1-42B6-ABB9-13E1F7B0392C",
                "type": "BoxGeometry",
                "width": 1,
                "height": 2,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "2F5ED8C5-A333-44ED-BD8C-1536BA183286",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "97DDF87B-758E-4DC6-A48E-DDEFF28FEAD0",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "1EA99CB0-4E51-4DC7-B133-AC8E3FE40C56",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 4, 0, -1, 1],
              "geometry": "CCB7A6A1-62C1-42B6-ABB9-13E1F7B0392C",
              "material": "2F5ED8C5-A333-44ED-BD8C-1536BA183286",
              "children": [
                {
                  "uuid": "7E041BD9-9429-4AB0-834F-44CBD8CB8097",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "CCB7A6A1-62C1-42B6-ABB9-13E1F7B0392C",
                  "material": "97DDF87B-758E-4DC6-A48E-DDEFF28FEAD0"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "73FE07AF-BE37-4B3E-BB71-A30C869E2571",
                "type": "BoxGeometry",
                "width": 1,
                "height": 9,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "B03EF53D-C3F6-40B7-96DC-71E198BACB1A",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "C9E36D1F-2045-4B95-93D2-B183909A155E",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "FFF37722-9C2F-45B2-9455-AF3A61DDE538",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 4, 1],
              "geometry": "73FE07AF-BE37-4B3E-BB71-A30C869E2571",
              "material": "B03EF53D-C3F6-40B7-96DC-71E198BACB1A",
              "children": [
                {
                  "uuid": "E657D77E-1086-4B32-8694-DD4F4760825E",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "73FE07AF-BE37-4B3E-BB71-A30C869E2571",
                  "material": "C9E36D1F-2045-4B95-93D2-B183909A155E"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "68B5A747-5943-4158-B246-4B2660587D4E",
                "type": "BoxGeometry",
                "width": 1,
                "height": 5,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "35103334-29B9-41B4-B22E-59F944757EEF",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "5AFAA13B-682B-4F60-B24A-7C422455A6B0",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "AEEA87A5-62AD-4AA4-B106-2779ACF2E38B",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -4, 0, 0, 1],
              "geometry": "68B5A747-5943-4158-B246-4B2660587D4E",
              "material": "35103334-29B9-41B4-B22E-59F944757EEF",
              "children": [
                {
                  "uuid": "59460780-33A4-4093-B862-052F983AB1F0",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "68B5A747-5943-4158-B246-4B2660587D4E",
                  "material": "5AFAA13B-682B-4F60-B24A-7C422455A6B0"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "73A8F30D-F83B-486D-8AD9-33A5EAC40EBD",
                "type": "BoxGeometry",
                "width": 1,
                "height": 7,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "C2C2FC26-627E-484E-A98A-BE1CE2D7A2A3",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "517B8D17-4702-4D97-81D2-62C10DD47F50",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "FC35B36F-AD8F-40E8-87DE-24A3DF7E4624",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -1, 0, -4, 1],
              "geometry": "73A8F30D-F83B-486D-8AD9-33A5EAC40EBD",
              "material": "C2C2FC26-627E-484E-A98A-BE1CE2D7A2A3",
              "children": [
                {
                  "uuid": "3F27942C-5B6F-4A82-9932-2BE3EA715E94",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "73A8F30D-F83B-486D-8AD9-33A5EAC40EBD",
                  "material": "517B8D17-4702-4D97-81D2-62C10DD47F50"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "5B30139E-7A45-4726-8BCF-955D07EBFFFF",
                "type": "BoxGeometry",
                "width": 1,
                "height": 1,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "470BE7EF-AB34-4E7E-8B01-9169F1B8EB6E",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "E0F1E9F7-60DD-4929-B193-75263CBC6D11",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "7FF701F7-6A1D-4E53-B87F-BF3835677BF0",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -6, 0, 2, 1],
              "geometry": "5B30139E-7A45-4726-8BCF-955D07EBFFFF",
              "material": "470BE7EF-AB34-4E7E-8B01-9169F1B8EB6E",
              "children": [
                {
                  "uuid": "D0B763CF-B5BB-4E6B-A731-DC501F16B334",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "5B30139E-7A45-4726-8BCF-955D07EBFFFF",
                  "material": "E0F1E9F7-60DD-4929-B193-75263CBC6D11"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "3AB1E457-094B-4154-9665-FFC87516ADA7",
                "type": "BoxGeometry",
                "width": 1,
                "height": 2,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "3CECDD6F-2F4B-4291-A441-796CEC409B8B",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "EE71EC10-226A-498A-8E97-2B5D8EE7BF10",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "20E93EDD-526D-4964-94F3-707398FC4F5B",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -2, 0, -4, 1],
              "geometry": "3AB1E457-094B-4154-9665-FFC87516ADA7",
              "material": "3CECDD6F-2F4B-4291-A441-796CEC409B8B",
              "children": [
                {
                  "uuid": "828C4CFE-887B-462B-A867-F1011FD355BA",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "3AB1E457-094B-4154-9665-FFC87516ADA7",
                  "material": "EE71EC10-226A-498A-8E97-2B5D8EE7BF10"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "F8651375-A9BC-47A5-A3E9-21A218FE6D0B",
                "type": "BoxGeometry",
                "width": 1,
                "height": 2,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "7B051A4A-232F-4E7D-9241-59DE554CE488",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "01D2BF57-3777-4744-8BD0-8636392C426F",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "A7B91A8A-B0AF-4F3D-9273-441E576BDF88",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -2, 1],
              "geometry": "F8651375-A9BC-47A5-A3E9-21A218FE6D0B",
              "material": "7B051A4A-232F-4E7D-9241-59DE554CE488",
              "children": [
                {
                  "uuid": "E8430983-F3D9-4E05-9471-532C1576B323",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "F8651375-A9BC-47A5-A3E9-21A218FE6D0B",
                  "material": "01D2BF57-3777-4744-8BD0-8636392C426F"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "EC6D3400-4AE6-4719-9B2B-C697FCBAC4F0",
                "type": "BoxGeometry",
                "width": 1,
                "height": 6,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "9539032A-E5D2-4704-9611-0DC5C043BD21",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "1CD438EA-B835-4717-8251-1E1C958A1541",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "F111F9A5-EF4A-4593-87BB-86D2686EE775",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 2, 0, -2, 1],
              "geometry": "EC6D3400-4AE6-4719-9B2B-C697FCBAC4F0",
              "material": "9539032A-E5D2-4704-9611-0DC5C043BD21",
              "children": [
                {
                  "uuid": "D21DFDF2-B84F-4132-A4D1-D712B750207B",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "EC6D3400-4AE6-4719-9B2B-C697FCBAC4F0",
                  "material": "1CD438EA-B835-4717-8251-1E1C958A1541"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "17DE0703-F1D1-4566-8ED0-BD027156D95C",
                "type": "BoxGeometry",
                "width": 1,
                "height": 5,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "C978DEE0-4B69-4534-B4C2-218E6825390E",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "081D0F04-2369-4698-9C94-C792DEE105E5",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "0B03ABF1-7CB2-4B2A-A247-7F2A5967C1AD",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -1, 0, -1, 1],
              "geometry": "17DE0703-F1D1-4566-8ED0-BD027156D95C",
              "material": "C978DEE0-4B69-4534-B4C2-218E6825390E",
              "children": [
                {
                  "uuid": "F9367465-7EF3-44F8-B99C-04E04FE76AB0",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "17DE0703-F1D1-4566-8ED0-BD027156D95C",
                  "material": "081D0F04-2369-4698-9C94-C792DEE105E5"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "2EB7D56A-6594-4F74-BCF6-B1403F0F49AB",
                "type": "BoxGeometry",
                "width": 1,
                "height": 7,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "8095C789-F199-43F8-AC42-3C27846BED1D",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "93218FF0-3935-4371-A965-9115BCE06828",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "A4138224-6B94-433A-85D0-931C12C3D7AF",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, -3, 1],
              "geometry": "2EB7D56A-6594-4F74-BCF6-B1403F0F49AB",
              "material": "8095C789-F199-43F8-AC42-3C27846BED1D",
              "children": [
                {
                  "uuid": "E45DA841-62C1-4165-ADE9-8BB27D7663E8",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "2EB7D56A-6594-4F74-BCF6-B1403F0F49AB",
                  "material": "93218FF0-3935-4371-A965-9115BCE06828"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "34C7FECB-C9C0-41A0-9785-7FC7D5EA470D",
                "type": "BoxGeometry",
                "width": 1,
                "height": 3,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "1FDEAF67-13CB-4EFA-A608-47CE5E90A21B",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "82396614-98A5-43C3-A1B3-2B47FF5467FB",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "026680BD-9DEA-4E08-BFB7-4B2AAF4CC175",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 2, 1],
              "geometry": "34C7FECB-C9C0-41A0-9785-7FC7D5EA470D",
              "material": "1FDEAF67-13CB-4EFA-A608-47CE5E90A21B",
              "children": [
                {
                  "uuid": "2B26F1D5-C6A7-4934-A79E-2A921845522A",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "34C7FECB-C9C0-41A0-9785-7FC7D5EA470D",
                  "material": "82396614-98A5-43C3-A1B3-2B47FF5467FB"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "D7016912-EE09-4D70-9380-E36BA33DD2C9",
                "type": "BoxGeometry",
                "width": 1,
                "height": 1,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "21E86834-4551-4159-899A-DC0972BD13DF",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "11163BC9-7DEB-4FA8-8DF1-C6864283878F",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "48B7D4AD-47BE-4B01-AFF2-10F463572644",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -2, 1],
              "geometry": "D7016912-EE09-4D70-9380-E36BA33DD2C9",
              "material": "21E86834-4551-4159-899A-DC0972BD13DF",
              "children": [
                {
                  "uuid": "CBDCC156-A8FC-4C06-9EA0-431F64F0BF2B",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "D7016912-EE09-4D70-9380-E36BA33DD2C9",
                  "material": "11163BC9-7DEB-4FA8-8DF1-C6864283878F"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "5772B5CB-56FA-49E0-A923-9CBECCBA8638",
                "type": "BoxGeometry",
                "width": 1,
                "height": 0,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "0C6C52A3-327A-4D96-AB62-3D60120279FF",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "94C90455-C22B-424B-9328-D217A9750788",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "257D5E0D-17FA-408E-85BF-582169273C1B",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 3, 0, -3, 1],
              "geometry": "5772B5CB-56FA-49E0-A923-9CBECCBA8638",
              "material": "0C6C52A3-327A-4D96-AB62-3D60120279FF",
              "children": [
                {
                  "uuid": "5A326AA2-13E9-43AF-8D74-A06A57E065E9",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "5772B5CB-56FA-49E0-A923-9CBECCBA8638",
                  "material": "94C90455-C22B-424B-9328-D217A9750788"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "D9B16809-12E4-4F0F-BEF5-6B99D1AFCD7E",
                "type": "BoxGeometry",
                "width": 1,
                "height": 2,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "BB49F709-7751-4E8D-9C71-D14A46A3EC64",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "902DEEE6-8639-4741-B604-A1BC4283E25C",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "567494CB-2916-4F82-AC21-6EBFBA7E8D60",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 4, 0, -2, 1],
              "geometry": "D9B16809-12E4-4F0F-BEF5-6B99D1AFCD7E",
              "material": "BB49F709-7751-4E8D-9C71-D14A46A3EC64",
              "children": [
                {
                  "uuid": "642BDCC5-5611-4670-9DD2-65BA698E89FF",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "D9B16809-12E4-4F0F-BEF5-6B99D1AFCD7E",
                  "material": "902DEEE6-8639-4741-B604-A1BC4283E25C"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "EEFD3D6F-5919-4BDA-893A-5AB1C6B59A88",
                "type": "BoxGeometry",
                "width": 1,
                "height": 6,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "C83FC5AB-99A9-47D7-8F73-B4F441A78782",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "4C360050-E75D-4E21-83E9-34F3CD2BF734",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "3201595E-0CC6-446C-80A7-4BF2BF05A97E",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 4, 0, -1, 1],
              "geometry": "EEFD3D6F-5919-4BDA-893A-5AB1C6B59A88",
              "material": "C83FC5AB-99A9-47D7-8F73-B4F441A78782",
              "children": [
                {
                  "uuid": "712F86C4-B532-4C36-A51F-7C40C64C4F15",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "EEFD3D6F-5919-4BDA-893A-5AB1C6B59A88",
                  "material": "4C360050-E75D-4E21-83E9-34F3CD2BF734"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "3E2AF381-987F-4026-9445-950D3B82EB36",
                "type": "BoxGeometry",
                "width": 1,
                "height": 8,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "7A722FA9-8B22-4236-A9A5-8E0A7C819A82",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "F38D1D72-B905-462C-A7AD-7FAADD7016E9",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "B14D549A-015D-4EF2-B967-54B50A8963C2",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -4, 0, -5, 1],
              "geometry": "3E2AF381-987F-4026-9445-950D3B82EB36",
              "material": "7A722FA9-8B22-4236-A9A5-8E0A7C819A82",
              "children": [
                {
                  "uuid": "47386132-264D-435B-AB6D-B0FFE536FCD6",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "3E2AF381-987F-4026-9445-950D3B82EB36",
                  "material": "F38D1D72-B905-462C-A7AD-7FAADD7016E9"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "61838C25-5307-46C1-B9D9-8C398BC6B5BE",
                "type": "BoxGeometry",
                "width": 1,
                "height": 2,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "A93EE7AD-F366-4C13-9F60-F28EF73624E6",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "A70C343B-3C30-41C3-9552-E7D379AF93AC",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "5FCF6DCF-EA58-4318-A107-19FE55F6FCCD",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -5, 1],
              "geometry": "61838C25-5307-46C1-B9D9-8C398BC6B5BE",
              "material": "A93EE7AD-F366-4C13-9F60-F28EF73624E6",
              "children": [
                {
                  "uuid": "044E7438-8B3B-4FCF-A935-774364F3B43E",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "61838C25-5307-46C1-B9D9-8C398BC6B5BE",
                  "material": "A70C343B-3C30-41C3-9552-E7D379AF93AC"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "9D2F3474-303A-4D4F-8593-87B8860B1C34",
                "type": "BoxGeometry",
                "width": 1,
                "height": 4,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "B7453A22-7F3C-4B83-A8A3-2A15E50C72E5",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "11E25AF9-5026-4034-AB27-97181D5719A2",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "9CF411F4-9CC1-4098-9C14-8F22D8B3B756",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 5, 1],
              "geometry": "9D2F3474-303A-4D4F-8593-87B8860B1C34",
              "material": "B7453A22-7F3C-4B83-A8A3-2A15E50C72E5",
              "children": [
                {
                  "uuid": "94C785FC-9F88-4607-8712-56DF470886FC",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "9D2F3474-303A-4D4F-8593-87B8860B1C34",
                  "material": "11E25AF9-5026-4034-AB27-97181D5719A2"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "108A1BBB-701F-4FF8-94DC-4C69CA326BF4",
                "type": "BoxGeometry",
                "width": 1,
                "height": 9,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "B683E98F-99D5-4132-9F4C-BACD187828F3",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "21DD61AE-D6B5-44B6-83DC-7B593940BAF2",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "AFBE9DF3-EA29-40F4-8A4F-D1E21140891E",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -1, 0, 2, 1],
              "geometry": "108A1BBB-701F-4FF8-94DC-4C69CA326BF4",
              "material": "B683E98F-99D5-4132-9F4C-BACD187828F3",
              "children": [
                {
                  "uuid": "3BE95264-AD11-4EEF-938C-2BE2E3AAB07F",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "108A1BBB-701F-4FF8-94DC-4C69CA326BF4",
                  "material": "21DD61AE-D6B5-44B6-83DC-7B593940BAF2"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "EFE45890-6784-4857-92D1-140EC7A19DBD",
                "type": "BoxGeometry",
                "width": 1,
                "height": 7,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "5F9E5B81-002D-4096-A2D6-3206F0C13668",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "7A967253-3BED-4899-ACBB-477CEC8B9A13",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "944389A5-BA06-43EB-885F-85EAF500AF7B",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -3, 0, 1, 1],
              "geometry": "EFE45890-6784-4857-92D1-140EC7A19DBD",
              "material": "5F9E5B81-002D-4096-A2D6-3206F0C13668",
              "children": [
                {
                  "uuid": "D0C7932E-1C3A-4E86-A0BC-B2B89F2A266E",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "EFE45890-6784-4857-92D1-140EC7A19DBD",
                  "material": "7A967253-3BED-4899-ACBB-477CEC8B9A13"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "7846DA14-8A50-4771-866F-19A6B9CABA8B",
                "type": "BoxGeometry",
                "width": 1,
                "height": 1,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "FA2BCF07-F2F3-4C70-A8ED-E5A364002EE1",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "3811B3DE-DC2F-40D1-A740-5D1CDD6FD123",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "634F858D-96AB-4165-816C-69885ACCEBC0",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 2, 0, 1, 1],
              "geometry": "7846DA14-8A50-4771-866F-19A6B9CABA8B",
              "material": "FA2BCF07-F2F3-4C70-A8ED-E5A364002EE1",
              "children": [
                {
                  "uuid": "C571A1A1-EF53-4607-A320-2994731AA9A9",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "7846DA14-8A50-4771-866F-19A6B9CABA8B",
                  "material": "3811B3DE-DC2F-40D1-A740-5D1CDD6FD123"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "07C4DAE5-7B7E-4775-94FB-EA7A767BE2B4",
                "type": "BoxGeometry",
                "width": 1,
                "height": 6,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "03D727BB-6D2E-46B5-9F22-40618B651F11",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "A4D3D4A2-F4A2-4CC9-A718-60385F6060C1",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "13AB3873-F41B-4448-9F1F-7ECB21D60A52",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, -2, 1],
              "geometry": "07C4DAE5-7B7E-4775-94FB-EA7A767BE2B4",
              "material": "03D727BB-6D2E-46B5-9F22-40618B651F11",
              "children": [
                {
                  "uuid": "79181F0B-1879-46AD-BC81-6C38EB61A060",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "07C4DAE5-7B7E-4775-94FB-EA7A767BE2B4",
                  "material": "A4D3D4A2-F4A2-4CC9-A718-60385F6060C1"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "FC5A1DA9-D977-4AD5-A406-DD4EF8131967",
                "type": "BoxGeometry",
                "width": 1,
                "height": 3,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "6513BF4F-09ED-4531-9885-ACF2336B915A",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "21B9F338-E93E-4516-851A-8E0C3619CE81",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "708038B5-5DE2-471A-B0C4-9FB79C7F3E63",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 5, 0, -6, 1],
              "geometry": "FC5A1DA9-D977-4AD5-A406-DD4EF8131967",
              "material": "6513BF4F-09ED-4531-9885-ACF2336B915A",
              "children": [
                {
                  "uuid": "860D1395-19E9-4C60-B644-57EE93E7D247",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "FC5A1DA9-D977-4AD5-A406-DD4EF8131967",
                  "material": "21B9F338-E93E-4516-851A-8E0C3619CE81"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "14838FA6-D3E6-4638-ADF5-1908D0C1E7D8",
                "type": "BoxGeometry",
                "width": 1,
                "height": 8,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "BB6113A8-C958-4FE4-A1B0-DE5CB1D804E0",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "DBDF6251-6672-4482-8185-477202550771",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "125FFC8A-65DB-4C49-98F1-980F1FC87149",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -2, 0, 1, 1],
              "geometry": "14838FA6-D3E6-4638-ADF5-1908D0C1E7D8",
              "material": "BB6113A8-C958-4FE4-A1B0-DE5CB1D804E0",
              "children": [
                {
                  "uuid": "9323DE59-924B-41A9-93F1-4C190BF31B36",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "14838FA6-D3E6-4638-ADF5-1908D0C1E7D8",
                  "material": "DBDF6251-6672-4482-8185-477202550771"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "B46A2B42-18D8-412B-85A3-E98BA1817070",
                "type": "BoxGeometry",
                "width": 1,
                "height": 5,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "58BB52CC-7DDD-4361-BED9-4512F830280F",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "6989B8A9-02A4-40A7-A21B-2CFFDA1FE5B5",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "2FE3AED2-CB43-4E82-AB7E-A705A494F1D5",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -1, 0, -3, 1],
              "geometry": "B46A2B42-18D8-412B-85A3-E98BA1817070",
              "material": "58BB52CC-7DDD-4361-BED9-4512F830280F",
              "children": [
                {
                  "uuid": "4B84A7EB-765E-47E1-93FC-4223C4A31320",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "B46A2B42-18D8-412B-85A3-E98BA1817070",
                  "material": "6989B8A9-02A4-40A7-A21B-2CFFDA1FE5B5"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "206CA7CC-3252-4F54-B88F-FE24F0968808",
                "type": "BoxGeometry",
                "width": 1,
                "height": 2,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "63EB2DD1-8B7D-43CD-BA78-3321F428C596",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "B241746E-BC8D-4D26-981F-16C4B4B38138",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "97F99630-E8E0-457C-9F03-9ADC23413B31",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 4, 0, 5, 1],
              "geometry": "206CA7CC-3252-4F54-B88F-FE24F0968808",
              "material": "63EB2DD1-8B7D-43CD-BA78-3321F428C596",
              "children": [
                {
                  "uuid": "AE13B68F-C9D1-4FDE-BB50-C24CBF7873F2",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "206CA7CC-3252-4F54-B88F-FE24F0968808",
                  "material": "B241746E-BC8D-4D26-981F-16C4B4B38138"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "70D8F5CA-601F-4E2F-82C6-6A8400E297FD",
                "type": "BoxGeometry",
                "width": 1,
                "height": 8,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "1A5BD9E4-3F4D-4D0D-A3A9-83385305B19C",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "AC5D6572-4FBE-49C9-8926-11DE2EF5A380",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "B35B6587-8290-4F46-88EC-EFE576E00B98",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 3, 0, 1, 1],
              "geometry": "70D8F5CA-601F-4E2F-82C6-6A8400E297FD",
              "material": "1A5BD9E4-3F4D-4D0D-A3A9-83385305B19C",
              "children": [
                {
                  "uuid": "F1BC7DA6-3EAA-460A-BA32-30D15CA85DF5",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "70D8F5CA-601F-4E2F-82C6-6A8400E297FD",
                  "material": "AC5D6572-4FBE-49C9-8926-11DE2EF5A380"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "E9B525F8-75FD-475D-81CA-4AE4FF951BB9",
                "type": "BoxGeometry",
                "width": 1,
                "height": 6,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "8FD153A9-DEE1-44F8-88E3-05F59C4B29C3",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "22125127-7285-475D-AE4E-4C0D87CEEF13",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "43B04A3F-AB4A-477A-BBAD-ACBB607BAF71",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -2, 0, 5, 1],
              "geometry": "E9B525F8-75FD-475D-81CA-4AE4FF951BB9",
              "material": "8FD153A9-DEE1-44F8-88E3-05F59C4B29C3",
              "children": [
                {
                  "uuid": "EEB4CCAA-F800-430C-BFA7-6C664652E449",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "E9B525F8-75FD-475D-81CA-4AE4FF951BB9",
                  "material": "22125127-7285-475D-AE4E-4C0D87CEEF13"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "758BB2D6-91BD-4304-8AFE-56F79F063BA3",
                "type": "BoxGeometry",
                "width": 1,
                "height": 8,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "B869851D-C14E-464C-9F6D-8DC110A7AC05",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "3654C1DF-1D83-4854-A84F-491F03BE9F49",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "9DB23418-BE5F-4B8E-AE47-D3216D6E0D98",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -5, 0, -1, 1],
              "geometry": "758BB2D6-91BD-4304-8AFE-56F79F063BA3",
              "material": "B869851D-C14E-464C-9F6D-8DC110A7AC05",
              "children": [
                {
                  "uuid": "6432B333-98D8-43CB-9C46-839652DA7374",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "758BB2D6-91BD-4304-8AFE-56F79F063BA3",
                  "material": "3654C1DF-1D83-4854-A84F-491F03BE9F49"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "669EDFA9-5F03-479F-9612-9C7DC588A181",
                "type": "BoxGeometry",
                "width": 1,
                "height": 2,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "6CC40CA9-95F8-4677-BABA-FA8306AB3F77",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "471499D0-C648-4BC4-B759-89E809165728",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "2FB6C0D8-7997-404C-81EF-937584070CFB",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -4, 0, 0, 1],
              "geometry": "669EDFA9-5F03-479F-9612-9C7DC588A181",
              "material": "6CC40CA9-95F8-4677-BABA-FA8306AB3F77",
              "children": [
                {
                  "uuid": "C6AF525D-DC7F-4B52-BC71-36F180F6A1D0",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "669EDFA9-5F03-479F-9612-9C7DC588A181",
                  "material": "471499D0-C648-4BC4-B759-89E809165728"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "6FDE7C3E-EBC9-4BAC-92B5-775B702859CF",
                "type": "BoxGeometry",
                "width": 1,
                "height": 8,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "57333B6F-68D3-43C3-8B84-41EA3E705B36",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "EDD9F92A-AD4E-4C4A-B106-11387C161F4C",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "98781238-FA55-4289-B010-03A93C250DBE",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
              "geometry": "6FDE7C3E-EBC9-4BAC-92B5-775B702859CF",
              "material": "57333B6F-68D3-43C3-8B84-41EA3E705B36",
              "children": [
                {
                  "uuid": "8B52A1A2-64E0-4A37-83F5-F77429B47156",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "6FDE7C3E-EBC9-4BAC-92B5-775B702859CF",
                  "material": "EDD9F92A-AD4E-4C4A-B106-11387C161F4C"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "CC1ED711-BA65-4F94-9E08-33CA052F07DD",
                "type": "BoxGeometry",
                "width": 1,
                "height": 7,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "D513BF70-2D05-40C7-9C18-FFB981F5C9BE",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "7A98073A-C9D9-4360-AA7D-6AAF050423CC",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "FBE0851E-F674-4EA9-B330-748D6DA95292",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -5, 0, 0, 1],
              "geometry": "CC1ED711-BA65-4F94-9E08-33CA052F07DD",
              "material": "D513BF70-2D05-40C7-9C18-FFB981F5C9BE",
              "children": [
                {
                  "uuid": "675219EF-6369-4808-B8C8-9FFB36DC6BE8",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "CC1ED711-BA65-4F94-9E08-33CA052F07DD",
                  "material": "7A98073A-C9D9-4360-AA7D-6AAF050423CC"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "99052FEB-FDD4-449A-A0B9-DC812179918A",
                "type": "BoxGeometry",
                "width": 1,
                "height": 1,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "A7E273C0-B325-4DD0-8068-93505FC73E2F",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "A7A589AB-308A-4B9C-A2DD-F0C6EE5DA5AD",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "A733BCB8-3879-4689-9B54-207C5F07CB5A",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, -5, 1],
              "geometry": "99052FEB-FDD4-449A-A0B9-DC812179918A",
              "material": "A7E273C0-B325-4DD0-8068-93505FC73E2F",
              "children": [
                {
                  "uuid": "82F3CEFE-55A9-4545-B629-8B40988EA449",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "99052FEB-FDD4-449A-A0B9-DC812179918A",
                  "material": "A7A589AB-308A-4B9C-A2DD-F0C6EE5DA5AD"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "14728D29-85B5-48FE-88B7-4C53F3A92154",
                "type": "BoxGeometry",
                "width": 1,
                "height": 9,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "18BAAF60-9CB3-4CFB-B9A7-7707EE87F80B",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "BA5CA651-35F1-49C1-AEDE-C1A7651CDF55",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "DD671E1D-6AB8-467D-B5BA-215A0C62F321",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -5, 0, 2, 1],
              "geometry": "14728D29-85B5-48FE-88B7-4C53F3A92154",
              "material": "18BAAF60-9CB3-4CFB-B9A7-7707EE87F80B",
              "children": [
                {
                  "uuid": "DFCEDB94-9953-4562-8BD5-0A3323A2D640",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "14728D29-85B5-48FE-88B7-4C53F3A92154",
                  "material": "BA5CA651-35F1-49C1-AEDE-C1A7651CDF55"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "D6E3857F-6046-4A7F-98E2-B02CCFA5C9BB",
                "type": "BoxGeometry",
                "width": 1,
                "height": 7,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "1C2DD591-6E8E-49B3-8980-472631E9F00D",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "2486FD39-314B-423A-AB87-2ECC4052ACD6",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "947B3FD0-54E9-49AC-AC0F-F5EAE20945B7",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, -3, 1],
              "geometry": "D6E3857F-6046-4A7F-98E2-B02CCFA5C9BB",
              "material": "1C2DD591-6E8E-49B3-8980-472631E9F00D",
              "children": [
                {
                  "uuid": "17B1967B-743C-4BC6-8C9D-767B44CCAB9F",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "D6E3857F-6046-4A7F-98E2-B02CCFA5C9BB",
                  "material": "2486FD39-314B-423A-AB87-2ECC4052ACD6"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "9D2C3207-55A5-4F14-8DEA-0655D58139AB",
                "type": "BoxGeometry",
                "width": 1,
                "height": 4,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "2D773037-029A-4672-A18E-1915A15786B6",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "D50B6849-B375-4126-BD44-9A31EF1A2160",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "435DD4F3-3F15-4633-821C-97C117EC7AFE",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -1, 0, -2, 1],
              "geometry": "9D2C3207-55A5-4F14-8DEA-0655D58139AB",
              "material": "2D773037-029A-4672-A18E-1915A15786B6",
              "children": [
                {
                  "uuid": "D3C19F4D-34C2-4CA0-8071-3C4D042625EF",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "9D2C3207-55A5-4F14-8DEA-0655D58139AB",
                  "material": "D50B6849-B375-4126-BD44-9A31EF1A2160"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "028BB071-9D13-4834-B9D7-9DD8A1754A3C",
                "type": "BoxGeometry",
                "width": 1,
                "height": 3,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "4B300C1B-8608-4D10-8EC5-EDEC41ECEEDD",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "BB452CEF-DFBA-4042-89EE-F4E86DC3CE1C",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "F0351A0C-52E5-40B9-B9AD-03285E332C3E",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 6, 1],
              "geometry": "028BB071-9D13-4834-B9D7-9DD8A1754A3C",
              "material": "4B300C1B-8608-4D10-8EC5-EDEC41ECEEDD",
              "children": [
                {
                  "uuid": "56EC99A0-4E04-4CC9-B374-BC506A6B462C",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "028BB071-9D13-4834-B9D7-9DD8A1754A3C",
                  "material": "BB452CEF-DFBA-4042-89EE-F4E86DC3CE1C"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "2D36142D-4A68-4909-AEA9-97D305E484D9",
                "type": "BoxGeometry",
                "width": 1,
                "height": 8,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "B976EDE3-F990-4A06-B07B-AB5D6D7E736D",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "DD3FD1DF-E990-40C6-BFAA-4F664D1EC686",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "B54F2F3A-E739-474F-B569-68AEA8470935",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -3, 0, -4, 1],
              "geometry": "2D36142D-4A68-4909-AEA9-97D305E484D9",
              "material": "B976EDE3-F990-4A06-B07B-AB5D6D7E736D",
              "children": [
                {
                  "uuid": "74681011-F6A9-48A0-B97F-300DFDC893D2",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "2D36142D-4A68-4909-AEA9-97D305E484D9",
                  "material": "DD3FD1DF-E990-40C6-BFAA-4F664D1EC686"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "DAA614CD-78C2-402F-B5AD-67591215ACFF",
                "type": "BoxGeometry",
                "width": 1,
                "height": 7,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "3B5B1E98-68A6-4095-A048-375BBFDB1911",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "81FDD98A-F632-4BE0-BF05-3D9559640E58",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "1D972342-EF25-45E2-9FF8-F9EFCD8B89EA",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 4, 0, -1, 1],
              "geometry": "DAA614CD-78C2-402F-B5AD-67591215ACFF",
              "material": "3B5B1E98-68A6-4095-A048-375BBFDB1911",
              "children": [
                {
                  "uuid": "A80DB2DE-3017-4DEB-8BDC-D4537B1B4805",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "DAA614CD-78C2-402F-B5AD-67591215ACFF",
                  "material": "81FDD98A-F632-4BE0-BF05-3D9559640E58"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "371EEF99-5207-4D27-AAD6-1FEB1F2247DC",
                "type": "BoxGeometry",
                "width": 1,
                "height": 3,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "96C9A118-269D-4EE3-BB65-9846D739AF4E",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "EB895EFE-2764-49A4-A2DA-E30B5C814101",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "11374882-AE4A-45D4-9ECE-7A591A0B756B",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 2, 0, 2, 1],
              "geometry": "371EEF99-5207-4D27-AAD6-1FEB1F2247DC",
              "material": "96C9A118-269D-4EE3-BB65-9846D739AF4E",
              "children": [
                {
                  "uuid": "9155C9A5-B858-4ECF-84A2-464842F633A6",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "371EEF99-5207-4D27-AAD6-1FEB1F2247DC",
                  "material": "EB895EFE-2764-49A4-A2DA-E30B5C814101"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "0F901A43-6189-4FF6-8BA4-FAB08DDDD281",
                "type": "BoxGeometry",
                "width": 1,
                "height": 3,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "24F9BB69-EFFD-44DA-A6A3-7E00B31EAD80",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "F76B217B-3678-4AE0-BEE6-9CE4D96C1968",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "AFF68DD4-FE35-4443-84F7-79750A3B6FB3",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 6, 0, 3, 1],
              "geometry": "0F901A43-6189-4FF6-8BA4-FAB08DDDD281",
              "material": "24F9BB69-EFFD-44DA-A6A3-7E00B31EAD80",
              "children": [
                {
                  "uuid": "0CB17FC4-8D39-4707-A376-B49294CB3F5F",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "0F901A43-6189-4FF6-8BA4-FAB08DDDD281",
                  "material": "F76B217B-3678-4AE0-BEE6-9CE4D96C1968"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "2223F9DE-D549-4FD7-A8E2-90B3EAFB4891",
                "type": "BoxGeometry",
                "width": 1,
                "height": 10,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "9CB08128-48F5-4AC1-80A7-AD29AB39E73E",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "A09A3647-E461-428B-8777-A14F1CAE3BCA",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "97E7404E-BCD8-4DDA-96BD-795F52B87BAC",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -4, 0, 3, 1],
              "geometry": "2223F9DE-D549-4FD7-A8E2-90B3EAFB4891",
              "material": "9CB08128-48F5-4AC1-80A7-AD29AB39E73E",
              "children": [
                {
                  "uuid": "807987B9-1D13-4D49-8F6E-BAD861637B21",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "2223F9DE-D549-4FD7-A8E2-90B3EAFB4891",
                  "material": "A09A3647-E461-428B-8777-A14F1CAE3BCA"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "841E6E89-AD39-4F71-A01A-C4E88E7624DE",
                "type": "BoxGeometry",
                "width": 1,
                "height": 8,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "10D435F0-8806-4CE0-864C-4C73A1519442",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "FE6D10CE-C486-42EE-843B-7E823B0BEFF2",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "6DC9D5C1-F4A0-4749-8098-D9A88CA7DD27",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -2, 0, -6, 1],
              "geometry": "841E6E89-AD39-4F71-A01A-C4E88E7624DE",
              "material": "10D435F0-8806-4CE0-864C-4C73A1519442",
              "children": [
                {
                  "uuid": "5C2FCB59-0A25-45F4-A269-827C854F5C4A",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "841E6E89-AD39-4F71-A01A-C4E88E7624DE",
                  "material": "FE6D10CE-C486-42EE-843B-7E823B0BEFF2"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "FEDD68FD-C40D-43DE-A0EE-1353538265A7",
                "type": "BoxGeometry",
                "width": 1,
                "height": 5,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "FA87F643-A1DD-4C8E-99EE-10812C165619",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "DFE27EE8-57BC-45DD-8695-B2967DCB90F4",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "E3A5C893-9001-4AAF-8FBA-B33B2AF13901",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -7, 0, 5, 1],
              "geometry": "FEDD68FD-C40D-43DE-A0EE-1353538265A7",
              "material": "FA87F643-A1DD-4C8E-99EE-10812C165619",
              "children": [
                {
                  "uuid": "8BA3EC40-0DE6-4CED-A775-B07E5C1D773D",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "FEDD68FD-C40D-43DE-A0EE-1353538265A7",
                  "material": "DFE27EE8-57BC-45DD-8695-B2967DCB90F4"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "2F22D447-4D49-458B-B42C-58F64144805D",
                "type": "BoxGeometry",
                "width": 1,
                "height": 5,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "11D65495-67A3-4A8B-A6D7-2EED34A10DFC",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "595EC63D-3D33-4E5F-84D1-A1E0F5515745",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "D1DFE54C-96EB-4EC2-9742-D7E23887A2BC",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -1, 0, 3, 1],
              "geometry": "2F22D447-4D49-458B-B42C-58F64144805D",
              "material": "11D65495-67A3-4A8B-A6D7-2EED34A10DFC",
              "children": [
                {
                  "uuid": "01F82D6D-1DB4-4D97-8371-9C78B1D2D8B7",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "2F22D447-4D49-458B-B42C-58F64144805D",
                  "material": "595EC63D-3D33-4E5F-84D1-A1E0F5515745"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "42C9207D-F57A-4CB8-A1EE-BAF415A2AF46",
                "type": "BoxGeometry",
                "width": 1,
                "height": 1,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "7A36D0E3-3EF0-4126-97BD-492E40401528",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "B2AA055F-D5A2-491D-BD7F-F9FD9EC0BAAF",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "454FBDF0-7564-4365-ACBB-76031FEBA1F6",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 2, 1],
              "geometry": "42C9207D-F57A-4CB8-A1EE-BAF415A2AF46",
              "material": "7A36D0E3-3EF0-4126-97BD-492E40401528",
              "children": [
                {
                  "uuid": "1FCF3F8D-9ABB-4B6E-A32C-2FB120B48DCF",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "42C9207D-F57A-4CB8-A1EE-BAF415A2AF46",
                  "material": "B2AA055F-D5A2-491D-BD7F-F9FD9EC0BAAF"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "9B544142-EDDC-41EE-8098-49CC40EB5082",
                "type": "BoxGeometry",
                "width": 1,
                "height": 9,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "5921BE6C-949E-415C-B01C-90084D4D13C8",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "9932D1F6-96D9-42F5-B473-ACF9D4003866",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "8AF5F45A-EF1B-48C4-A186-27EFE650CB58",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 2, 1],
              "geometry": "9B544142-EDDC-41EE-8098-49CC40EB5082",
              "material": "5921BE6C-949E-415C-B01C-90084D4D13C8",
              "children": [
                {
                  "uuid": "6926AC94-924D-475E-9726-D08635244EC2",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "9B544142-EDDC-41EE-8098-49CC40EB5082",
                  "material": "9932D1F6-96D9-42F5-B473-ACF9D4003866"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "F5167540-19FF-4F15-AE3C-B202FAD6CF6A",
                "type": "BoxGeometry",
                "width": 1,
                "height": 7,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "E7BF390C-DD2A-46BB-B28D-2F6E43275677",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "D35E6D73-00A6-4004-9F28-B4585AD52BF1",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "EB7096DF-13A7-42A4-A624-6B2871C94D34",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 2, 0, 0, 1],
              "geometry": "F5167540-19FF-4F15-AE3C-B202FAD6CF6A",
              "material": "E7BF390C-DD2A-46BB-B28D-2F6E43275677",
              "children": [
                {
                  "uuid": "A3B69666-CF63-41F4-9ED7-0D3D85D4848A",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "F5167540-19FF-4F15-AE3C-B202FAD6CF6A",
                  "material": "D35E6D73-00A6-4004-9F28-B4585AD52BF1"
                }
              ]
            }
          },
          {
            "metadata": {
              "version": 4.5,
              "type": "Object",
              "generator": "Object3D.toJSON"
            },
            "geometries": [
              {
                "uuid": "79AEAD96-4BCC-430A-9DD7-AF52F450FB22",
                "type": "BoxGeometry",
                "width": 1,
                "height": 4,
                "depth": 1,
                "widthSegments": 2,
                "heightSegments": 2,
                "depthSegments": 2
              }
            ],
            "materials": [
              {
                "uuid": "2252D558-F5D8-475F-A9D2-2B53C9632EE9",
                "type": "MeshStandardMaterial",
                "color": 0,
                "roughness": 0.5,
                "metalness": 0.5,
                "emissive": 0,
                "side": 2,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true
              },
              {
                "uuid": "E40272C8-761C-4E1A-A7D5-E021F7D2BB47",
                "type": "MeshLambertMaterial",
                "color": 16777215,
                "emissive": 0,
                "side": 2,
                "opacity": 0.03,
                "transparent": true,
                "depthFunc": 3,
                "depthTest": true,
                "depthWrite": true,
                "wireframe": true
              }
            ],
            "object": {
              "uuid": "5E226049-26D5-419D-8FDC-E1BC925FB2E8",
              "type": "Mesh",
              "name": "cube",
              "castShadow": true,
              "receiveShadow": true,
              "userData": { "clickable": true },
              "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 3, 0, 1, 1],
              "geometry": "79AEAD96-4BCC-430A-9DD7-AF52F450FB22",
              "material": "2252D558-F5D8-475F-A9D2-2B53C9632EE9",
              "children": [
                {
                  "uuid": "76389252-67AD-4BF2-8E60-2087F546B40F",
                  "type": "Mesh",
                  "matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                  "geometry": "79AEAD96-4BCC-430A-9DD7-AF52F450FB22",
                  "material": "E40272C8-761C-4E1A-A7D5-E021F7D2BB47"
                }
              ]
            }
          }
        ]
        jso.forEach(element=>{
          var count=1;
          loader.parse(
            element,
            function (object) {
              // if(count===3)
              // {
                // console.log(object.material.uuid)
                if(object.material.uuid==="B03EF53D-C3F6-40B7-96DC-71E198BACB1A")
                {
                  object.material.color.set(0xBDB5D5)
                }
                count++;
              // }
              scene.add(object);
            },
            function (error) {
              console.error('An error happened', error);
            }
            )
          })
          var gmaterial = new THREE.MeshToonMaterial({color:0xFFFF00, side:THREE.DoubleSide});
            var gparticular = new THREE.CircleGeometry(0.01, 3);
            var aparticular = 5;
            
            for (var h = 1; h<300; h++) {
              var particular = new THREE.Mesh(gparticular, gmaterial);
              particular.position.set(mathRandom(aparticular), mathRandom(aparticular),mathRandom(aparticular));
              particular.rotation.set(mathRandom(),mathRandom(),mathRandom());
              smoke.add(particular);
            }

        var raycaster = new THREE.Raycaster();
        var mouse = new THREE.Vector2();

        var createCars = function(cScale = 2, cPos = 20, cColor = 0xFFFF00) {
          var cMat = new THREE.MeshToonMaterial({color:cColor, side:THREE.DoubleSide});
          var cGeo = new THREE.BoxGeometry(1, cScale/40, cScale/40);
          var cElem = new THREE.Mesh(cGeo, cMat);
          var cAmp = 3;
          
          if (createCarPos) {
            createCarPos = false;
            cElem.position.x = -cPos;
            cElem.position.z = (mathRandom(cAmp));
        
            TweenMax.to(cElem.position, 3, {x:cPos, repeat:-1, yoyo:true, delay:mathRandom(3)});
          } else {
            createCarPos = true;
            cElem.position.x = (mathRandom(cAmp));
            cElem.position.z = -cPos;
            cElem.rotation.y = 90 * Math.PI / 180;
          
            TweenMax.to(cElem.position, 5, {z:cPos, repeat:-1, yoyo:true, delay:mathRandom(3), ease:Power1.easeInOut});
          };
          cElem.receiveShadow = true;
          cElem.castShadow = true;
          cElem.position.y = Math.abs(mathRandom(5));
          scene.add(cElem);
        };
        
        var generateLines = function() {
          for (var i = 0; i<100; i++) {
            createCars(0.1, 20);
          };
        };
        generateLines()

        function onMouseMove(event) {
            event.preventDefault();
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) *2  + 1;
        };
        function onDocumentTouchStart(event) {
            if (event.touches.length === 1) {
                event.preventDefault();
                mouse.x = event.touches[0].pageX - window.innerWidth / 2;
                mouse.y = event.touches[0].pageY - window.innerHeight / 2;
            };
        };
        function onDocumentTouchMove(event) {
            if (event.touches.length === 1) {
                event.preventDefault();
                mouse.x = event.touches[0].pageX - window.innerWidth / 2;
                mouse.y = event.touches[0].pageY - window.innerHeight / 2;
            }
        }
        function OnScrollMouse(event) {
            // event.preventDefault();
            if(event.deltaY<0)
            {
              camera.position.z += event.deltaY / 500;
            }
            else{
              if(camera.position.z<=18)
              {
                camera.position.z += event.deltaY / 500;
                // console.log(camera.position.z)
              }
            }
        }

        function onDocumentMouseDown(event) {
            event.preventDefault();

            raycaster.setFromCamera(mouse, camera);
            var intersects = raycaster.intersectObjects(scene.children);
            if (intersects.length > 0) {
              // window.alert("Do you want to buy this building")
              // intersects[0].object.material.color.set(0xff0000);
              // console.log(intersects[0].object.material.uuid);
              // setismodalshown(!ismodalshown)
              // <Modal />
            }
        }
      
        window.addEventListener('mousemove', onMouseMove, false);
        window.addEventListener('wheel', OnScrollMouse, false);
        window.addEventListener('click', onDocumentMouseDown, false);
        window.addEventListener('touchstart', onDocumentTouchStart, false );
        window.addEventListener('touchmove', onDocumentTouchMove, false );

        var ambientLight = new THREE.AmbientLight(0xFDB813, 4);
        var lightFront = new THREE.SpotLight(0xFDB813, 20, 10);
        var lightBack = new THREE.PointLight(0xFDB813, 0.5);

        lightFront.rotation.x = 45 * Math.PI / 180;
        lightFront.rotation.z = -45 * Math.PI / 180;
        lightFront.position.set(5, 5, 5);
        lightFront.castShadow = true;
        lightFront.shadow.mapSize.width = 6000;
        lightFront.shadow.mapSize.height = lightFront.shadow.mapSize.width;
        lightFront.penumbra = 0.1;
        lightBack.position.set(0, 6, 0);

        smoke.position.y = 2;

        scene.add(ambientLight);
        scene.add(lightBack);

        var gridHelper = new THREE.GridHelper(60, 120, 0xFF0000, 0x000000);
        scene.add(gridHelper);

        var animate = function () {
            requestAnimationFrame(animate);

            scene.rotation.y -= ((mouse.x * 8) - camera.rotation.y) * uSpeed;
            scene.rotation.x -= (-(mouse.y * 3) - camera.rotation.x) * uSpeed;
            if (scene.rotation.x < -0.05) scene.rotation.x = -0.05;
            else if (scene.rotation.x > 1) scene.rotation.x = 1;

            raycaster.setFromCamera(mouse, camera);
            smoke.rotation.y += 0.01;
            smoke.rotation.x += 0.01;

            camera.lookAt(scene.position);
            renderer.render(scene, camera);
          }
          animate()
          // eslint-disable-next-line
    }, [])
    
  return (
    <>
      <Map />
      {
        ismodalshown && <Modal/>
      }
    </>
  )
}

export default City2