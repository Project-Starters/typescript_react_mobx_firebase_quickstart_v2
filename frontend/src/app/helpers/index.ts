import merge from 'deepmerge'
export const initializeFormData = (formData, defaultData): object => {
    return merge(formData, defaultData)
}