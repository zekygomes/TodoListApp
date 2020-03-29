/* eslint-disable */
import {Model} from 'vue-mc';
const model = require('vue-mc');

/**
 * Task model
 */
export default class Task extends Model{

    // Default attributes that define the "empty" state.
    defaults() {
        return {
            id:   null,
            title: '',
            description: '',
            done: false,
            created_at: '',
            categories: [],
        }
    }

    // Attribute mutations.
    mutations() {
        return {
            id:   (id) => Number(id) || null,
            title: String,
            description: String,
            done: Boolean,
            created_at: Date,
            categories: Object
        }
    }

    // Attribute validation
    validation() {
        return {
            id: integer.and(min(1)).or(equal(null)),
            title: string.and(required),
            description: string,
            done: boolean,
            created_at: date,
            categories: object
        }
    }

    // Route configuration
    routes() {
        return {
            fetch: '/task/{id}',
            save:  '/task',
        }
    }
}