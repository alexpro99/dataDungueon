module.exports.Hero = class {
    constructor (lv, name, exp = 0) {
        this.name = name;
        this.hp = 55 * 0.5 * lv;
        this.mp = 55 * 0.2 * lv;
        this.lv = lv;
    }

    static takeDamage(damage) {
        this.hp -= damage;
        
    }
    static totalAtk () {
        return 3;
    }
    static expUp(exp) {
        this.exp += exp;
        if (this.exp >= 100 * lv) {
            this.lv += 1;
            this.exp = 0;
        }
    }



}