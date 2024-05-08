class APIFilters {
    constructor(query, queryStr){
        this.query = query;
        this.queryStr = queryStr;
    }
    
    search(){
        const keyword = this.queryStr.keyword 
        ? {
            name:{     // search the keyword in name
                $regex: this.queryStr.keyword,
                $options: "i",
            },
        }
        :{};
    
        this.query = this.query.find({ ...keyword });
        return this;
    }

    filters(){
        const queryCopy = {...this.queryStr};

        // Fields to remove
        const fieldsToRemove = ["keyword","page"];  // delete the keyword like:keyword?apple
        fieldsToRemove.forEach((el) => delete queryCopy[el]);

        // Advance filter for price, ratings etc
        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (match) => `$${match}`);  // to convert from gte ---> $gte
        console.log(queryStr);
        
        this.query = this.query.find(JSON.parse(queryStr));  // to filter category & convert into object
        return this;
    } 

    pagination(resPerPage){
        const currentPage = Number(this.queryStr.page) || 1;  // current page
        const skip = resPerPage * (currentPage - 1);  // skip pages

        this.query = this.query.limit(resPerPage).skip(skip);  // ek saath kitne page kaa limit
        return this;
    };
}


export default APIFilters;