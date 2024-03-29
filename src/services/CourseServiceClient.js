let _singleton = Symbol();
const COURSE_API_URL = 'http://localhost:8080/api/course';//later change this to heroku url
class CourseServiceClient {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new CourseServiceClient(_singleton);
        return this[_singleton]
    }
    findAllCourses() {
        return fetch(COURSE_API_URL)
            .then(function(response){
                return response.json();
            });
    }
    createCourse(course){
        return fetch(COURSE_API_URL, {
            body: JSON.stringify(course),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(function (response) {
            return response.json();
        })
    }
    deleteCourse(Id){
        return fetch(COURSE_API_URL+'/'+Id,{
            method: 'DELETE'
        })
    }
    findCourseById(Id){
        console.log("in get course name");
        return fetch(COURSE_API_URL.concat('/').concat(Id)).then(function (response){
            return response.json()
            });
        }


}
export default CourseServiceClient;
