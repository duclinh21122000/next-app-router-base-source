import { api } from './api'

export const demoApi = api.injectEndpoints({
  endpoints: (build) => ({
    getListCharacter: build.query({
      query: (params) => ({
        url: 'character',
        method: 'GET',
        params,
      }),
      providesTags: ['Character']
    }),
  }),
})

export const { useGetListCharacterQuery } = demoApi
