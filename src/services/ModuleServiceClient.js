const MODULE_API_URL =
    'http://localhost:8080/api/course/CID/module';
const MODULE_API_URL_DELETE =
    'http://localhost:8080/api/module/MID';

let _singleton = Symbol();
export default class ModuleServiceClient {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }
    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new ModuleServiceClient(_singleton);
        return this[_singleton]
    }

    findAllModulesForCourse(courseId) {
        return fetch(
            MODULE_API_URL
                .replace('CID', courseId))
            .then(function (response) {
                return response.json();
            })
    }

    createModule(courseId, module) {
        return fetch(MODULE_API_URL.replace('CID', courseId),
            {
                body: JSON.stringify(module),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response)
        { return response.json(); });
    }
    deleteModule(moduleId){
        return fetch(MODULE_API_URL_DELETE.replace('MID',moduleId),
            {
                headers: {'Content-Type': 'application/json'},
                method: 'DELETE'
            });
    }
    findAllModules(){
        return fetch('/api/module').then(function (response) {
            return response.json();
        })
    }

}