let _singleton = Symbol();
const COURSE_API_URL = 'http://localhost:8080/api/module';//later change this to heroku url
class ModuleService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new CourseService(_singleton);
        return this[_singleton]
    }

}
export default ModuleService;
