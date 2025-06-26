const getAge = () => {
    const today = new Date();
    const birth = new Date(new Date(1996, 5, 4));
    
    if (isNaN(birth.getTime())) {
        throw new Error("Invalid date format");
    }

    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    return age;
}

export default getAge;