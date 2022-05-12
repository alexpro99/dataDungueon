const LinkedList = require('../Clases/LinkedList/LinkedList').LinkedList
const Enemy = require('../Models/Enemy').Enemy;
const Hero = require('../Models/Hero').Hero;

module.exports.Lista = (lv, name) => {
    const dungeon = new LinkedList();
    for (let index = 0; index < lv * 3; index++) {
        dungeon.add(new Enemy(lv, name + ' Monster'));

    }
    dungeon.add(new Enemy(lv + 2, name + ' Boss'));
    return dungeon;

}