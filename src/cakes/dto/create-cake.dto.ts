import { IsDateString, IsDefined, IsInt, IsNotEmpty, IsPositive, Matches, Max, Min } from "class-validator";

export class CreateCakeDto {

    @IsNotEmpty()
    @Matches(/^[a-z]+$/,{message:'A név csak angol kisbetű lehet'})
    name:string;

    @IsInt({message:'Az árnak egésznek kell lennie'})
    @IsPositive({message:'Az árnak pozitívnak kell lennie'})
    price:number;

    @IsDefined()
    @IsInt({message:'A méretnek egésznek kell lennie'})
    @Min(5)
    @Max(50)
    size:number;

    @IsDateString()
    endDate:string
}
