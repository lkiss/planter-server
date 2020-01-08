
export const errorMiddleware = async (err: any, req: any, res: any, next: any) => {
    if (err) {
        console.log("Request body")
        console.log(req.body);
        console.error(err)
        res.status(500).send('Something broke!')
    }
    next();
}