import React from 'react';

const Calendar = () => {
  return (
    <div className="calendar">
      <div className="selected-month">Oct 2020</div>
      <div className="week-days">
        <span>Sun</span>
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
      </div>
      <div className="days">
        <button className="passive">27</button>
        <button className="passive">28</button>
        <button className="passive">29</button>
        <button className="passive">30</button>
        <button>
          <span>1</span>
        </button>
        <button>
          <span>2</span>
        </button>
        <button>
          <span>3</span>
        </button>
        <button>
          <span>4</span>
        </button>
        <button>
          <span>5</span>
        </button>
        <button>
          <span>6</span>
        </button>
        <button>
          <span>7</span>
        </button>
        <button>
          <span>8</span>
        </button>
        <button>
          <span>9</span>
        </button>
        <button>
          <span>10</span>
        </button>
        <button>
          <span>11</span>
        </button>
        <button>
          <span>12</span>
        </button>
        <button>
          <span className="selected">13</span>
        </button>
        <button>
          <span>14</span>
        </button>
        <button>
          <span>15</span>
        </button>
        <button>
          <span>16</span>
        </button>
        <button>
          <span>17</span>
        </button>
        <button>
          <span>18</span>
        </button>
        <button>
          <span>19</span>
        </button>
        <button>
          <span>20</span>
        </button>
        <button>
          <span>21</span>
        </button>
        <button>
          <span>22</span>
        </button>
        <button>
          <span>23</span>
        </button>
        <button className="today">
          <span>24</span>
        </button>
        <button>
          <span>25</span>
        </button>
        <button>
          <span>26</span>
        </button>
        <button>
          <span>27</span>
        </button>
        <button>
          <span>28</span>
        </button>
        <button>
          <span>29</span>
        </button>
        <button>
          <span>30</span>
        </button>
        <button>
          <span>31</span>
        </button>
        <button>
          <span>31</span>
        </button>
      </div>
    </div>
  );
};

export default Calendar;
