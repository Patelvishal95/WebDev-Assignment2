let _singleton = Symbol();

const LESSON_API_URL = 'http://localhost:8080/api/module/{moduleId}/lesson';

class LessonService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new LessonService(_singleton);
        return this[_singleton]
    }

    findAllLesson(moduleId){
        return fetch(LESSON_API_URL.replace('moduleId',moduleId))
            .then(function (response){return response.json()});
    }
    addLesson(lesson,moduleId){
        return fetch(LESSON_API_URL.replace('moduleId',moduleId))
    }
}
