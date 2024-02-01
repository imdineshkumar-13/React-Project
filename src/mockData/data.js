import audi from '../images/audi-logo.png'
import bmw from '../images/bmw-logo.png'
import lamborghini from '../images/lamborghini-logo.png'
import ferrari from '../images/ferrari-logo.png'
import ford from '../images/ford-logo.png'
import jaguar from '../images/jaguar-logo.png'
import benz from '../images/mercedes-benz-logo.png'
import rolls from '../images/rolls-royce-logo.png'
import toyota from '../images/toyota-logo.png'
import volkswagen from '../images/volkswagen-logo.png'

export const mockData = [
    {
        model: 'Audi',
        color: 'red',
        yearOfManufacture: 2012,
        insuranceValidUpto: 2030,
        kms: 20000,
        location: 'chennai',
        noOfOwners: 1,
        transmission: 'automatic',
        externalFitments: 2,
        photo: audi
    },
    {
        model: 'Bmw',
        color: 'blue',
        yearOfManufacture: 2014,
        insuranceValidUpto: 2035,
        kms: 10000,
        location: 'kerala',
        noOfOwners: 2,
        transmission: 'manual',
        externalFitments: 3,
        photo: bmw
    },
    {
        model: 'Lamborghini',
        color: 'green',
        yearOfManufacture: 2013,
        insuranceValidUpto: 2045,
        kms: 30000,
        location: 'hyderabad',
        noOfOwners: 3,
        transmission: 'automatic',
        externalFitments: 1,
        photo: lamborghini
    },
    {
        model: 'Ferrari',
        color: 'red',
        yearOfManufacture: 2012,
        insuranceValidUpto: 2030,
        kms: 20000,
        location: 'kerala',
        noOfOwners: 2,
        transmission: 'manual',
        externalFitments: 1,
        photo: ferrari
    },
    {
        model: 'Jaguar',
        color: 'green',
        yearOfManufacture: 2013,
        insuranceValidUpto: 2045,
        kms: 10000,
        location: 'chennai',
        noOfOwners: 1,
        transmission: 'automatic',
        externalFitments: 2,
        photo: jaguar
    },
    {
        model: 'Ford',
        color: 'blue',
        yearOfManufacture: 2014,
        insuranceValidUpto: 2035,
        kms: 30000,
        location: 'hyderabad',
        noOfOwners: 1,
        transmission: 'manual',
        externalFitments: 2,
        photo: ford
    },
    {
        model: 'Benz',
        color: 'green',
        yearOfManufacture: 2013,
        insuranceValidUpto: 2030,
        kms: 60000,
        location: 'kerala',
        noOfOwners: 1,
        transmission: 'automatic',
        externalFitments: 2,
        photo: benz
    },
    {
        model: 'Rolls Royce',
        color: 'blue',
        yearOfManufacture: 2014,
        insuranceValidUpto: 2045,
        kms: 60000,
        location: 'chennai',
        noOfOwners: 1,
        transmission: 'manual',
        externalFitments: 2,
        photo: rolls
    },
    {
        model: 'Toyota',
        color: 'black',
        yearOfManufacture: 2012,
        insuranceValidUpto: 2035,
        kms: 30200,
        location: 'hyderabad',
        noOfOwners: 1,
        transmission: 'manual',
        externalFitments: 3,
        photo: toyota
    },
    {
        model: 'Benz',
        color: 'green',
        yearOfManufacture: 2012,
        insuranceValidUpto: 2030,
        kms: 60000,
        location: 'kerala',
        noOfOwners: 1,
        transmission: 'automatic',
        externalFitments: 1,
        photo: benz
    },
    {
        model: 'volkswagen',
        color: 'black',
        yearOfManufacture: 2014,
        insuranceValidUpto: 2035,
        kms: 50000,
        location: 'chennai',
        noOfOwners: 1,
        transmission: 'automatic',
        externalFitments: 3,
        photo: volkswagen
    }
]

export const headerData = ['Home', 'Logo', 'Filter'];

export const locationData = ['select', 'chennai', 'kerala', 'hyderabad'];

export const colorData = ['red', 'blue', 'green', 'black'];

export const noOfOwnersData = [1, 2, 3];