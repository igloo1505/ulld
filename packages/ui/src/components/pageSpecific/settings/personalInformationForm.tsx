import React, { ChangeEvent, ChangeEventHandler, useState } from 'react'

interface PersonalInformationValues {
    name: {
        first: string
        last: string
    }
    email: string
    address: {
        country: string
        street: string
        zip: number
        city: string
        stateProvince: string
    }
}


interface SettingsPersonalInformationFormProps {
    values: PersonalInformationValues
    onChange: (v: PersonalInformationValues) => void
}

const SettingsPersonalInformationForm = (props: SettingsPersonalInformationFormProps) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        props.onChange({
            ...props.values,
            ...(["firstName", "lastName"].indexOf(e.target.name) && {
                name: {
                    ...props.values.name,
                    [e.target.name.split("Name")[0]]: e.target.value
                }
            }),
            ...(["street", "country", "zip", "city", "state"].indexOf(e.target.name) && {
                address: {
                    ...props.values.address,
                    [e.target.name]: e.target.value
                }
            })
        })

    }
    return (
        <div className="border-b border-gray-900/10 dark:border-gray-200/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200">
                        First name
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="firstName"
                            id="first-name"
                            value={props.values.name.first}
                            onChange={handleChange}
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-200 dark:bg-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200">
                        Last name
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="lastName"
                            value={props.values.name.last}
                            onChange={handleChange}
                            id="last-name"
                            autoComplete="family-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-200 dark:bg-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-4">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200">
                        Email address
                    </label>
                    <div className="mt-2">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={props.values.email}
                            onChange={handleChange}
                            autoComplete="email"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-200 shadow-sm dark:bg-gray-900 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200 ">
                        Country
                    </label>
                    <div className="mt-2">
                        <select
                            id="country"
                            name="country"
                            value={props.values.address.country}
                            onChange={handleChange}
                            autoComplete="country-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 dark:bg-gray-900"
                        >
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                        </select>
                    </div>
                </div>

                <div className="col-span-full">
                    <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200">
                        Street address
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="street"
                            id="street-address"
                            value={props.values.address.street}
                            onChange={handleChange}
                            autoComplete="street-address"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-200 dark:bg-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                    <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200">
                        City
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="city"
                            id="city"
                            value={props.values.address.city}
                            onChange={handleChange}
                            autoComplete="address-level2"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-200 dark:bg-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200">
                        State / Province
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="state"
                            id="region"
                            value={props.values.address.stateProvince}
                            onChange={handleChange}
                            autoComplete="address-level1"
                            className="block w-full dark:bg-gray-900 rounded-md border-0 py-1.5 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200">
                        ZIP / Postal code
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="zip"
                            id="postal-code"
                            value={props.values.address.zip}
                            onChange={handleChange}
                            autoComplete="postal-code"
                            className="block w-full rounded-md border-0 dark:bg-gray-900 py-1.5 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}


SettingsPersonalInformationForm.displayName = "SettingsPersonalInformationForm"


export default SettingsPersonalInformationForm;
