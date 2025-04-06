const tree = [{v: 5, c: [{v:10, c: [{v:11}]}, { v:7, c: [{ v:5, c: [ { v:1 }
                        ]
                    }
                ]
            }
        ]
    },
    {
        v: 5,
        c: [
            {
                v:10
            },
            {
                v:15
            }
        ]
    }
]

function treeSumAllValues(tree) {
  let sum = 0;
  for(let child of tree){
    sum += child.v;
    if(!child.c) {
      return child.v;
    }
    sum += treeSumAllValues(child.c)
  }
  return sum
}
