
module.exports.Enemy = class {
    constructor (lv, name) {
        this.hp = 55 * 0.5 * lv;
        this.mp = 55 * 0.2 * lv;
        this.name = name;
    }

    static takeDamage(damage, hero) {
        this.hp -= damage;
        if (hp < 0) {
            hero.expUp(10);
        }
    }

    

}