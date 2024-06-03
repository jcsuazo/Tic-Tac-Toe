import { renderHook, act } from "@testing-library/react";
import useGame  from "./useGame";

describe('useGame', () => { 
  test('should render the initial game state', () => { 
    const { result } = renderHook(() => useGame());
    expect(result.current.board).toEqual([
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ]);
    expect(result.current.winner).toBe(null);
    expect(result.current.currentPlayer).toBe('X');
    expect(result.current.isGameOver).toBe(false);
  })

  
})