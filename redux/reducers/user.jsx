import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const BASE_URL = "http://192.168.0.187:8000/"


const getToken = () => {
    return true
}


export const UserApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ 
        baseUrl: `${BASE_URL}`,
        prepareHeaders: (headers) => {
            const token = getToken()
            if(token){
                headers.set("authorization", `JWT ${token}`)
            }

            return headers
        },
    }),
    tagTypes: ['User'],
    endpoints: ( builder ) => ({
        getUserData : builder.query({
            query: () => "user/",
            providesTags: ['User']
        }),
        signInUser : builder.mutation({
            query: userData => "user_auth/api/token/"
            //invalidatesTags: ['User']
        }),
        signUpUser: builder.mutation({
            query: userData => "auth/users/",
            //invalidatesTags: ['User']
        }),
        updateUser: builder.mutation({
            query: args => `user_auth/myprofile/${args.id}`,
            invalidatesTags: ['User']
        }),
    })
})