const connection = require('../config/mysql')

module.exports = {
    insertScore: (data) => {
        return new Promise((resolve, reject) => {
            for (let i = 0; i < 2 ; i ++) {
                let name = data.clubname[i];
                let points = data.clubpoints[i];
            connection.query (`SELECT * FROM tb_club WHERE club_name = '${name}'`, (error, result) => {
              console.log(result)
                if (result[0] !== undefined) {
                    connection.query(
                        `UPDATE tb_club SET club_points = ${result[0].club_points + points} WHERE club_name = '${name}'`, (error, result) => {
                            // console.log(error, 'error')
                            // console.log(result, 'result')
                            if(error) reject ( new Error (error));
                            resolve(result);
                        }
                    );
                } else {
                    connection.query('ALTER TABLE tb_club AUTO_INCREMENT = 0');
                    connection.query(
                        `INSERT INTO tb_club (club_name, club_points) VALUES ( '${name}', ${points})`, (error, result) => {
                            if (error) reject(new Error(error));
                            resolve(result);
                        }
                    )
                }
            } )
            }
          })},
    getAll: () => {
        return new Promise((resolve, reject) => {
            connection.query(
                'SELECT club_name as clubname, club_points as points FROM tb_club ORDER BY club_points DESC', (error, result) => {
                   console.log(result, 'result')
                    if(error) reject(new Error(error));
                    resolve(result);
                }
            )
        })
    }
}