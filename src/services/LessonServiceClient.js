let _singleton = Symbol();

const LESSON_API_URL = 'http://localhost:8080/api/module/MID/lesson';

export default class LessonServiceClient {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new LessonServiceClient(_singleton);
        return this[_singleton]
    }

    findAllLessonforModule(moduleId){
        return fetch(LESSON_API_URL.replace('MID',moduleId))
            .then(function (response){return response.json()});
    }
    addLesson(lesson,moduleId){
        return fetch(LESSON_API_URL.replace('MID',moduleId),
            {
                body: JSON.stringify(lesson),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            })
    }
    deleteLesson(lessonId,moduleId){
        return fetch(LESSON_API_URL.replace('MID',moduleId).concat('/').concat(lessonId),
            {
                method: 'DELETE'
            })
    }
    findAllLessons(){
        return fetch('/api/lesson').then(function (response) {
            return response.json();

        })
    }
}
