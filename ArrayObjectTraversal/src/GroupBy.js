// Suppose you have input like:
/*
- Write method findPath
- Should take two params:
    - object
    - keys separated by dots as string
- Return value if it exists at that path inside the object, else return undefined
*/

export default function App() {
  var skillsArray = [
    { skill: "css", user: "Bill" },
    { skill: "javascript", user: "Chad" },
    { skill: "javascript", user: "Bill" },
    { skill: "css", user: "Sue" },
    { skill: "javascript", user: "Sue" },
    { skill: "html", user: "Sue" },
  ];
  // Convert it into result of the following form:
  // [
  //   { skill: 'javascript', user: [ 'Chad', 'Bill', 'Sue' ], count: 3 },
  //   { skill: 'css', user: [ 'Sue', 'Bill' ], count: 2 },
  //   { skill: 'html', user: [ 'Sue' ], count: 1 }
  // ]

  function groupBySkills(array) {
    const grouped = {};
    for (let i = 0; i < array.length; i++) {
      const { skill, user } = array[i];

      if (!grouped[skill]) {
        grouped[skill] = { skill, user: [], count: 0 };
      }

      if (!grouped[skill].user.includes(user)) {
        grouped[skill].user.push(user);
      }

      grouped[skill].count++;
    }

    return Object.values(grouped).sort((a, b) => a.count - b.count);
  }

  console.log("heyyy", groupBySkills(skillsArray));

  return <div></div>;
}
