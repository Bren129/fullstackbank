import { UseCard } from "../components/partials/UseCard";

export const Home = () => {
    return (
        <UseCard
            align="center"
            txtcolor="black"
            header="Meyer Bank"
            title="Welcome to Bank of Meyer!"
            text="To ensure privacy, never share sensitive information.."
            body={
                <>
                    <img
                        alt="bank"
                        src="https://img.freepik.com/premium-vector/bank-building-money-bank-financing-money-exchange-financial-services-atm-giving-out-money_625536-194.jpg?w=2000"
                        className="img-fluid"
                    />
                    <br />
                    <div
                        style={{
                            fontSize: ".6rem",
                        }}
                    >

                    </div>
                </>
            }
        />
    );
};
