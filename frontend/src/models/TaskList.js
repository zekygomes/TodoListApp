import {Collection} from 'vue-mc';
import Task from './Task';

/**
 * Task collection
 */
export default class TaskList extends Collection {

    // Model that is contained in this collection.
    model() {
        return Task;
    }

    // Default attributes
    defaults() {
        return {
            orderBy: 'created_at',
        }
    }

    // Route configuration
    routes() {
        return {
            fetch: '/tasks',
        }
    }

    // Number of tasks to be completed.
    get todo() {
        return this.sum('done');
    }

    // Will be `true` if all tasks have been completed.
    get done() {
        return this.todo == 0;
    }
}