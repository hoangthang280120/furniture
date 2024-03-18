import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, Radio, RadioGroup } from "@mui/material"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Filter =()=>{
    return(
        <div className="grid grid-cols-4 gap-4 mt-5 filter w-full">
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Khoảng giá
                    </AccordionSummary>
                    <AccordionDetails>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="all" control={<Radio color="warning" />} label="Tất cả" />
                            <FormControlLabel value="5" control={<Radio color="warning" />} label="Nhỏ hơn 500,000đ" />
                            <FormControlLabel value="10" control={<Radio color="warning" />} label="Từ 500,000₫ - 1,000,000₫" />
                            <FormControlLabel value="20" control={<Radio color="warning" />} label="Từ 1,000,000₫ - 2,000,000₫" />
                            <FormControlLabel value="40" control={<Radio color="warning" />} label="Từ 2,000,000₫ - 4,000,000₫" />
                            <FormControlLabel value="60" control={<Radio color="warning" />} label="Từ 4,000,000₫ - 6,000,000₫" />
                            <FormControlLabel value="61" control={<Radio color="warning" />} label="Lớn hơn 6,000,000₫" />
                        </RadioGroup>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Sản phẩm
                    </AccordionSummary>
                    <AccordionDetails>
                        <div>
                            <Checkbox color="warning"/>
                            Tủ quần áo
                        </div>
                        <div>
                            <Checkbox color="warning"/>
                            Bàn làm việc
                        </div>
                        <div>
                            <Checkbox color="warning"/>
                            Sofa
                        </div>
                        <div>
                            <Checkbox color="warning"/>
                            Bàn ăn
                        </div>
                        <div>
                            <Checkbox color="warning"/>
                            Kệ tivi
                        </div>
                        <div>
                            <Checkbox color="warning"/>
                            Giường ngủ
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Màu sắc
                    </AccordionSummary>
                    <AccordionDetails>
                        <div>
                            <Checkbox color="warning" sx={{color:"red"}}/>
                            Đỏ
                        </div>
                        <div>
                            <Checkbox color="warning" sx={{color:"blue"}}/>
                            Xanh
                        </div>
                        <div>
                            <Checkbox color="warning" sx={{color:"yellow"}}/>
                            Vàng
                        </div>
                        <div>
                            <Checkbox color="warning" sx={{color:"black"}}/>
                            Đen
                        </div>
                        <div>
                            <Checkbox color="warning" sx={{color:"purple"}}/>
                            Tím
                        </div>
                        <div>
                            <Checkbox color="warning" sx={{color:"gray"}}/>
                            Trắng
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header" >
                        Sắp xếp
                    </AccordionSummary>
                    <AccordionDetails>
                    <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group" >
                            <FormControlLabel value="new" control={<Radio checked color="warning" />} label="Mới nhất" />
                            <FormControlLabel value="bestseller" control={<Radio color="warning" />} label="Sản phẩm bán chạy" />
                            <FormControlLabel value="pricemintomax" control={<Radio color="warning" />} label="Giá từ thấp tới cao" />
                            <FormControlLabel value="pricemaxtomin" control={<Radio color="warning" />} label="Giá từ cao tới thấp" />
                        </RadioGroup>
                    </AccordionDetails>
                </Accordion>
            </div>
    )
}
export default Filter