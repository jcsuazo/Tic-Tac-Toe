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

  test("should render the initial board state", () => {
    const { result } = renderHook(() => useGame());
    expect(result.current.board).toEqual([
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ]);
  })

  test("should render an X when cliking a cell", () => {
    const { result } = renderHook(() => useGame());
    act(() => {
      result.current.playerAction(0, 0);
    })
    expect(result.current.board).toEqual([
      ['X', '', ''],
      ['', '', ''],
      ['', '', ''],
    ]);
  })

  test("should render an 0 when cliking a cell", () => {
    const { result } = renderHook(() => useGame());
    act(() => {
      result.current.playerAction(0, 0);
    })
    act(() => {
      result.current.playerAction(0, 1);
    })
    expect(result.current.board).toEqual([
      ['X', 'O', ''],
      ['', '', ''],
      ['', '', ''],
    ]);
  })


})