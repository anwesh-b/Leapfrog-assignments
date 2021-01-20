const tBody = document.getElementsByTagName('tBody')[0];

for (let task of assignments){
    tBody.innerHTML += `
        <tr>
            <td>${task.name}</td>
            <td>${task.date}</td>
            <td><a href="${task.demo}" target="_blank">Demo</a></td>
            <td><a href="${task.code}" target="_blank">Code</a></td>
        </tr>
    `;
}